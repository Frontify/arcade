/* (c) Copyright Frontify Ltd., all rights reserved. */

import { renderHook } from '@testing-library/react';
import { type AxisScale } from '@visx/axis';
import { DataContext, type DataContextType } from '@visx/xychart';
import { type ReactNode, type Dispatch, type SetStateAction } from 'react';
import { type Mock, afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { useRotatedLabel } from '@components/BarChart/components/hooks/useRotatedLabel';

// @ts-expect-error Wrong export of types
import type useFontFaceObserver from 'use-font-face-observer';

type DataProviderProps = {
    children: ReactNode;
    dataContext: DataContextType<AxisScale, AxisScale, Record<string, unknown>>;
};

const DataProvider = ({ children, dataContext }: DataProviderProps) => {
    return <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>;
};

const mockData = (bandWidth: number, paddingInner: number) => {
    return {
        xScale: {
            domain: vi.fn().mockReturnValue(['tick1', 'tick two', 'tick3', 'tick 4']),
            bandwidth: vi.fn().mockReturnValue(bandWidth),
            paddingInner: vi.fn().mockReturnValue(paddingInner),
            paddingOuter: vi.fn(),
        },
    } as unknown as DataContextType<AxisScale, AxisScale, Record<string, unknown>>;
};

vi.mock('use-font-face-observer', () => ({
    default: vi.fn(),
}));

vi.mock('@components/common/helpers', () => ({
    getSVGTextDimensions: vi.fn(),
}));

const updateMaxLabelHeightMock: Mock<[(prevState: number) => number], void> = vi.fn();
const updateFirstLabelOverflowsByMock: Mock<[(prevState: number) => number], void> = vi.fn();

describe('useRotatedLabel', () => {
    let useFontFaceObserverMock: typeof useFontFaceObserver;

    beforeEach(async () => {
        // @ts-expect-error Wrong export of types
        const { default: useFontFaceObserver } = await import('use-font-face-observer');
        const { getSVGTextDimensions } = await import('@components/common/helpers');
        vi.mocked(useFontFaceObserver).mockReturnValue(true);
        vi.mocked(getSVGTextDimensions).mockReturnValue({ width: 100, height: 100 });
        useFontFaceObserverMock = vi.mocked(useFontFaceObserver);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('returns 360 when horizontal', () => {
        const dataContext = mockData(20, 0.5);
        const wrapper = ({ children }: { children: ReactNode }) => (
            <DataProvider dataContext={dataContext}>{children}</DataProvider>
        );
        const { result } = renderHook(
            () =>
                useRotatedLabel(
                    true,
                    updateMaxLabelHeightMock as Dispatch<SetStateAction<number>>,
                    updateFirstLabelOverflowsByMock as Dispatch<SetStateAction<number>>,
                    (label) => label,
                ),
            { wrapper },
        );

        expect(result.current).toEqual(0);
        expect(updateMaxLabelHeightMock).not.toHaveBeenCalled();
        expect(updateFirstLabelOverflowsByMock).not.toHaveBeenCalled();
    });

    test('returns 360 when labels fit', () => {
        const dataContext = mockData(180, 0.5);
        const wrapper = ({ children }: { children: ReactNode }) => (
            <DataProvider dataContext={dataContext}>{children}</DataProvider>
        );

        const { result } = renderHook(
            () =>
                useRotatedLabel(
                    false,
                    updateMaxLabelHeightMock as Dispatch<SetStateAction<number>>,
                    updateFirstLabelOverflowsByMock as Dispatch<SetStateAction<number>>,
                    (label) => label,
                ),
            {
                wrapper,
            },
        );

        expect(result.current).toEqual(0);
        expect(updateMaxLabelHeightMock).toHaveBeenCalled();
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalled();
        expect(updateMaxLabelHeightMock).toHaveBeenCalledTimes(1);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledTimes(1);
        expect(updateMaxLabelHeightMock).toHaveBeenCalledWith(100);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledWith(-35);
    });

    test('returns 315 (45deg counter-clockwise) when labels do not fit', () => {
        const dataContext = mockData(20, 0.5);
        const wrapper = ({ children }: { children: ReactNode }) => (
            <DataProvider dataContext={dataContext}>{children}</DataProvider>
        );

        const { result } = renderHook(
            () =>
                useRotatedLabel(
                    false,
                    updateMaxLabelHeightMock as Dispatch<SetStateAction<number>>,
                    updateFirstLabelOverflowsByMock as Dispatch<SetStateAction<number>>,
                    (label) => label,
                ),
            { wrapper },
        );

        expect(result.current).toEqual(315);
        expect(updateMaxLabelHeightMock).toHaveBeenCalledTimes(1);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledTimes(1);
        expect(updateMaxLabelHeightMock).toHaveBeenCalledWith(100);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledWith(85);
    });

    test('returns 0 until font is loaded, then 315', () => {
        useFontFaceObserverMock.mockReturnValue(false);

        const dataContext = mockData(20, 0.5);
        const wrapper = ({ children }: { children: ReactNode }) => (
            <DataProvider dataContext={dataContext}>{children}</DataProvider>
        );

        const { result, rerender } = renderHook(
            () =>
                useRotatedLabel(
                    false,
                    updateMaxLabelHeightMock as Dispatch<SetStateAction<number>>,
                    updateFirstLabelOverflowsByMock as Dispatch<SetStateAction<number>>,
                    (label) => label,
                ),
            { wrapper },
        );

        expect(result.current).toEqual(0);
        expect(updateMaxLabelHeightMock).not.toHaveBeenCalled();
        expect(updateFirstLabelOverflowsByMock).not.toHaveBeenCalled();

        useFontFaceObserverMock.mockReturnValue(true);
        rerender();

        expect(result.current).toEqual(315);
        expect(updateMaxLabelHeightMock).toHaveBeenCalledTimes(1);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledTimes(1);
        expect(updateMaxLabelHeightMock).toHaveBeenCalledWith(100);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledWith(85);
    });

    test('updates margin when label would overflow and returns 315', () => {
        const dataContext = mockData(80, 0.5);
        const wrapper = ({ children }: { children: ReactNode }) => (
            <DataProvider dataContext={dataContext}>{children}</DataProvider>
        );

        const { result } = renderHook(
            () =>
                useRotatedLabel(
                    false,
                    updateMaxLabelHeightMock as Dispatch<SetStateAction<number>>,
                    updateFirstLabelOverflowsByMock as Dispatch<SetStateAction<number>>,
                    (label) => label,
                ),
            { wrapper },
        );

        expect(result.current).toEqual(0);
        expect(updateMaxLabelHeightMock).toHaveBeenCalled();
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalled();
        expect(updateMaxLabelHeightMock).toHaveBeenCalledTimes(1);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledTimes(1);
        expect(updateMaxLabelHeightMock).toHaveBeenCalledWith(100);
        expect(updateFirstLabelOverflowsByMock).toHaveBeenCalledWith(40);
    });
});
