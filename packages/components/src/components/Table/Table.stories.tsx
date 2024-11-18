/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconMagnifier, IconPen, IconTrashBin } from '@frontify/fondue-icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState, useMemo, type FormEvent } from 'react';

import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Dropdown } from '../Dropdown/Dropdown';
import { Flex } from '../Flex/Flex';
import { Switch } from '../Switch/Switch';
import { TextInput } from '../TextInput/TextInput';

import { Table, TableHeader, TableRoot, TableHeaderCell, TableBody, TableRow, TableRowCell } from './Table';

export default { component: Table };
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Table.Root> = {
    component: TableRoot,
    subcomponents: {
        // @ts-expect-error Storybook types are incorrect
        'Table.Header': TableHeader,
        // @ts-expect-error Storybook types are incorrect
        'Table.HeaderCell': TableHeaderCell,
        // @ts-expect-error Storybook types are incorrect
        'Table.Body': TableBody,
        // @ts-expect-error Storybook types are incorrect
        'Table.Row': TableRow,
        // @ts-expect-error Storybook types are incorrect
        'Table.RowCell': TableRowCell,
    },
    tags: ['autodocs'],
    parameters: {
        status: {
            type: 'released',
        },
    },
    args: {},
};

const TABLE_DATA = [
    {
        id: 1,
        firstName: 'Chris',
        lastName: 'Glasser',
        name: 'Chris Glasser',
        age: 32,
        role: 'Senior Developer',
        email: 'c.a.glasser@outlook.com',
        invited: 'Rhonda Rhodes',
        lastSeen: 'Oct 23, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 2,
        firstName: 'David',
        lastName: 'Elson',
        name: 'David Elson',
        age: 28,
        role: 'Product Manager',
        email: 'david29@gmail.com',
        invited: 'Rodger Struck',
        lastSeen: 'Oct 21, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 3,
        firstName: 'Eddie',
        lastName: 'Lake',
        name: 'Eddie Lake',
        age: 35,
        role: 'UX Designer',
        email: 'eddie_lake@gmail.com',
        invited: 'Frances Swann',
        lastSeen: 'Nov 11, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 4,
        firstName: 'James',
        lastName: 'Hall',
        name: 'James Hall',
        age: 41,
        role: 'Technical Lead',
        email: 'james_hall@gmail.com',
        invited: 'Alex Buckmaster',
        lastSeen: 'Nov 12, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 5,
        firstName: 'Jerry',
        lastName: 'Helfer',
        name: 'Jerry Helfer',
        age: 39,
        role: 'Frontend Developer',
        email: 'jerry73@aol.com',
        invited: 'Bradley Lawlor',
        lastSeen: 'Nov 1, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 6,
        firstName: 'Judith',
        lastName: 'Rodriguez',
        name: 'Judith Rodriguez',
        age: 33,
        role: 'Product Designer',
        email: 'judith403@gmail.com',
        invited: 'John Dukes',
        lastSeen: 'Oct 30, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 7,
        firstName: 'Kathy',
        lastName: 'Pacheco',
        name: 'Kathy Pacheco',
        age: 36,
        role: 'Backend Developer',
        email: 'k_pacheco@gmail.com',
        invited: 'James Hall',
        lastSeen: 'Nov 7, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 8,
        firstName: 'Kimberly',
        lastName: 'Mastrangelo',
        name: 'Kimberly Mastrangelo',
        age: 29,
        role: 'QA Engineer',
        email: 'k.r.mastrangelo@outlook.com',
        invited: 'Corina McCoy',
        lastSeen: 'Oct 29, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 9,
        firstName: 'Mary',
        lastName: 'Freund',
        name: 'Mary Freund',
        age: 44,
        role: 'System Architect',
        email: 'm.k.freund@aol.com',
        invited: 'Autumn Phillips',
        lastSeen: 'Oct 31, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 10,
        firstName: 'Patricia',
        lastName: 'Sanders',
        name: 'Patricia Sanders',
        age: 31,
        role: 'DevOps Engineer',
        email: 'patricia95@outlook.com',
        invited: 'Patricia Sanders',
        lastSeen: 'Oct 28, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 11,
        firstName: 'Ricky',
        lastName: 'Smith',
        name: 'Ricky Smith',
        age: 37,
        role: 'Data Engineer',
        email: 'r.m.smith@gmail.com',
        invited: 'Iva Ryan',
        lastSeen: 'Oct 20, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
    {
        id: 12,
        firstName: 'Stephanie',
        lastName: 'Sharkey',
        name: 'Stephanie Sharkey',
        age: 34,
        role: 'Full Stack Developer',
        email: 's.t.sharkey@outlook.com',
        invited: 'Kenneth Allen',
        lastSeen: 'Oct 26, 2024',
        initialLogin: 'SSO',
        lastLogin: 'SSO',
        twoFa: true,
        analytics: 24,
        guidelines: 24,
        libraries: 24,
        projects: 24,
        groups: 24,
        targets: 24,
    },
];

export const Basic: Story = {
    render: () => (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width="250px">Name</Table.HeaderCell>
                    <Table.HeaderCell width="80px">Admin</Table.HeaderCell>
                    <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Initial login</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Last login</Table.HeaderCell>
                    <Table.HeaderCell width="80px">2FA</Table.HeaderCell>
                    <Table.HeaderCell width="100px">Analytics access</Table.HeaderCell>
                    <Table.HeaderCell width="100px">Guidelines</Table.HeaderCell>
                    <Table.HeaderCell width="100px">Libraries</Table.HeaderCell>
                    <Table.HeaderCell width="100px">Projects</Table.HeaderCell>
                    <Table.HeaderCell width="100px">Groups</Table.HeaderCell>
                    <Table.HeaderCell width="100px">Targets</Table.HeaderCell>
                    <Table.HeaderCell width="80px">Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user) => (
                    <Table.Row key={user.email}>
                        <Table.RowCell>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>
                        </Table.RowCell>
                        <Table.RowCell>
                            <Switch aria-label="Admin" />
                        </Table.RowCell>
                        <Table.RowCell>{user.invited}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                        <Table.RowCell>{user.initialLogin}</Table.RowCell>
                        <Table.RowCell>{user.lastLogin}</Table.RowCell>
                        <Table.RowCell>{user.twoFa ? 'Yes' : 'No'}</Table.RowCell>
                        <Table.RowCell>
                            {' '}
                            <Switch aria-label="Analytics" />
                        </Table.RowCell>
                        <Table.RowCell>{user.guidelines}</Table.RowCell>
                        <Table.RowCell>{user.libraries}</Table.RowCell>
                        <Table.RowCell>{user.projects}</Table.RowCell>
                        <Table.RowCell>{user.groups}</Table.RowCell>
                        <Table.RowCell>{user.targets}</Table.RowCell>
                        <Table.RowCell>
                            <Flex gap="0.25rem">
                                <Button size="small" aspect="square" emphasis="weak">
                                    <IconPen size={16} />
                                </Button>
                                <Button variant="danger" size="small" aspect="square" emphasis="weak">
                                    <IconTrashBin size={16} />
                                </Button>
                            </Flex>
                        </Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const AutoLayout: Story = {
    render: () => (
        <Table.Root layout="auto">
            <Table.Header>
                <tr>
                    <Table.HeaderCell width="100px">Name</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell>Last Seen</Table.HeaderCell>
                </tr>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user) => (
                    <Table.Row key={user.id}>
                        <Table.RowCell>{user.name}</Table.RowCell>
                        <Table.RowCell>{user.role}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const FixedLayout: Story = {
    render: () => (
        <Table.Root layout="fixed">
            <Table.Header>
                <tr>
                    <Table.HeaderCell width="100px">Name</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell>Last Seen</Table.HeaderCell>
                </tr>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user) => (
                    <Table.Row key={user.id}>
                        <Table.RowCell>{user.name}</Table.RowCell>
                        <Table.RowCell>{user.role}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const NonFullWidth: Story = {
    render: () => (
        <Table.Root fullWidth={false}>
            <Table.Header>
                <tr>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell>Last Seen</Table.HeaderCell>
                </tr>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user) => (
                    <Table.Row key={user.id}>
                        <Table.RowCell>{user.name}</Table.RowCell>
                        <Table.RowCell>{user.role}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const Sortable: Story = {
    render: () => {
        const [sortField, setSortField] = useState<string | null>(null);
        const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>();

        const sortedUsers = [...TABLE_DATA].sort((a, b) => {
            if (!sortField || !sortDirection) {
                return 0;
            }

            const aValue = a[sortField as keyof typeof a];
            const bValue = b[sortField as keyof typeof b];

            if (sortDirection === 'ascending') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        return (
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            width="250px"
                            sortDirection={sortField === 'name' ? sortDirection : undefined}
                            onSortChange={(direction) => {
                                setSortField('name');
                                setSortDirection(direction);
                            }}
                        >
                            Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            width="150px"
                            sortDirection={sortField === 'invited' ? sortDirection : undefined}
                            onSortChange={(direction) => {
                                setSortField('invited');
                                setSortDirection(direction);
                            }}
                        >
                            Invited by
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            width="120px"
                            sortDirection={sortField === 'lastSeen' ? sortDirection : undefined}
                            onSortChange={(direction) => {
                                setSortField('lastSeen');
                                setSortDirection(direction);
                            }}
                        >
                            Last seen
                        </Table.HeaderCell>
                        {/* Other columns without sorting */}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {sortedUsers.map((user) => (
                        <Table.Row key={user.email}>
                            <Table.RowCell>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <div className="font-medium">{user.name}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </Table.RowCell>
                            <Table.RowCell>{user.invited}</Table.RowCell>
                            <Table.RowCell>{user.lastSeen}</Table.RowCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        );
    },
};

export const StickyHeader: Story = {
    render: () => (
        <div className="h-96 overflow-auto border rounded-lg">
            <Table.Root>
                <Table.Header sticky>
                    <Table.Row>
                        <Table.HeaderCell width="250px">Name</Table.HeaderCell>
                        <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
                        <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
                        <Table.HeaderCell width="120px">Initial login</Table.HeaderCell>
                        <Table.HeaderCell width="120px">Last login</Table.HeaderCell>
                        <Table.HeaderCell width="80px">2FA</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {[...TABLE_DATA, ...TABLE_DATA, ...TABLE_DATA].map((user, index) => (
                        <Table.Row key={`${user.email}-${index}`}>
                            <Table.RowCell>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <div className="font-medium">{user.name}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </Table.RowCell>
                            <Table.RowCell>{user.invited}</Table.RowCell>
                            <Table.RowCell>{user.lastSeen}</Table.RowCell>
                            <Table.RowCell>{user.initialLogin}</Table.RowCell>
                            <Table.RowCell>{user.lastLogin}</Table.RowCell>
                            <Table.RowCell>{user.twoFa ? 'Yes' : 'No'}</Table.RowCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width="250px">Name</Table.HeaderCell>
                    <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user) => (
                    <Table.Row key={user.email} onClick={() => alert(`Clicked on ${user.name}`)}>
                        <Table.RowCell>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>
                        </Table.RowCell>
                        <Table.RowCell>{user.invited}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const WithLinks: Story = {
    render: () => (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width="250px">Name</Table.HeaderCell>
                    <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user) => (
                    <Table.Row
                        key={user.email}
                        href={`/users/${user.email}`}
                        onNavigate={() => alert(`Navigating to ${user.email}`)}
                    >
                        <Table.RowCell>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>
                        </Table.RowCell>
                        <Table.RowCell>{user.invited}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const StickyFirstColumn: Story = {
    render: () => (
        <div style={{ width: '700px', overflow: 'auto' }}>
            <Table.Root layout="auto">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Invited by</Table.HeaderCell>
                        <Table.HeaderCell>Last seen</Table.HeaderCell>
                        <Table.HeaderCell>Initial login</Table.HeaderCell>
                        <Table.HeaderCell>Last login</Table.HeaderCell>
                        <Table.HeaderCell>2FA</Table.HeaderCell>
                        <Table.HeaderCell>Analytics</Table.HeaderCell>
                        <Table.HeaderCell>Guidelines</Table.HeaderCell>
                        <Table.HeaderCell>Libraries</Table.HeaderCell>
                        <Table.HeaderCell>Projects</Table.HeaderCell>
                        <Table.HeaderCell>Groups</Table.HeaderCell>
                        <Table.HeaderCell>Targets</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body stickyFirstColumn>
                    {TABLE_DATA.map((user) => (
                        <Table.Row key={user.email}>
                            <Table.RowCell>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <div className="font-medium">{user.name}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </Table.RowCell>
                            <Table.RowCell>{user.invited}</Table.RowCell>
                            <Table.RowCell>{user.lastSeen}</Table.RowCell>
                            <Table.RowCell>{user.initialLogin}</Table.RowCell>
                            <Table.RowCell>{user.lastLogin}</Table.RowCell>
                            <Table.RowCell>{user.twoFa ? 'Yes' : 'No'}</Table.RowCell>
                            <Table.RowCell>{user.analytics}</Table.RowCell>
                            <Table.RowCell>{user.guidelines}</Table.RowCell>
                            <Table.RowCell>{user.libraries}</Table.RowCell>
                            <Table.RowCell>{user.projects}</Table.RowCell>
                            <Table.RowCell>{user.groups}</Table.RowCell>
                            <Table.RowCell>{user.targets}</Table.RowCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    ),
};

export const LoadingState: Story = {
    render: () => (
        <Table.Root loading>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width="250px">Name</Table.HeaderCell>
                    <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Table.Row key={index}>
                        <Table.RowCell>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                                <div>
                                    <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
                                    <div className="w-48 h-3 mt-1 bg-gray-200 rounded animate-pulse" />
                                </div>
                            </div>
                        </Table.RowCell>
                        <Table.RowCell>
                            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                        </Table.RowCell>
                        <Table.RowCell>
                            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
                        </Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width="250px">Name</Table.HeaderCell>
                    <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user, index) => (
                    <Table.Row
                        key={user.email}
                        onClick={() => alert(`Clicked on ${user.name}`)}
                        disabled={index % 3 === 0}
                    >
                        <Table.RowCell>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>
                        </Table.RowCell>
                        <Table.RowCell>{user.invited}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const WithCaption: Story = {
    render: () => (
        <Table.Root caption="User Management Dashboard">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width="250px">Name</Table.HeaderCell>
                    <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
                    <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.slice(0, 5).map((user) => (
                    <Table.Row key={user.email}>
                        <Table.RowCell>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>
                        </Table.RowCell>
                        <Table.RowCell>{user.invited}</Table.RowCell>
                        <Table.RowCell>{user.lastSeen}</Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const TruncatedContent: Story = {
    render: () => (
        <div style={{ width: '200px' }}>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell truncate>Name</Table.HeaderCell>
                        <Table.HeaderCell>Invited by</Table.HeaderCell>
                        <Table.HeaderCell truncate>Last seen</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {TABLE_DATA.slice(0, 5).map((user) => (
                        <Table.Row key={user.email}>
                            <Table.RowCell truncate>{user.name}</Table.RowCell>
                            <Table.RowCell>{user.invited}</Table.RowCell>
                            <Table.RowCell truncate>{user.lastSeen}</Table.RowCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    ),
};

export const WithSearchAndFilters: Story = {
    render: () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [ageFilter, setAgeFilter] = useState<'all' | 'young' | 'old'>('all');

        const filteredAndSortedData = useMemo(() => {
            let result = [...TABLE_DATA];

            // Apply search filter
            if (searchTerm) {
                result = result.filter(
                    (user) =>
                        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
                );
            }

            if (ageFilter !== 'all') {
                result = result.filter((user) => (ageFilter === 'young' ? user.age < 30 : user.age >= 30));
            }

            return result;
        }, [searchTerm, ageFilter]);

        return (
            <Flex direction="column" gap="1rem">
                <Flex gap="1rem">
                    <TextInput
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    >
                        <TextInput.Slot>
                            <IconMagnifier />
                        </TextInput.Slot>
                    </TextInput>
                    <Dropdown.Root>
                        <Dropdown.Trigger>
                            <Button>Filter by age</Button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Item onSelect={() => setAgeFilter('all')}>All</Dropdown.Item>
                            <Dropdown.Item onSelect={() => setAgeFilter('young')}>Young</Dropdown.Item>
                            <Dropdown.Item onSelect={() => setAgeFilter('old')}>Old</Dropdown.Item>
                        </Dropdown.Content>
                    </Dropdown.Root>
                </Flex>

                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                            <Table.HeaderCell>Role</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {filteredAndSortedData.map((user) => (
                            <Table.Row key={user.id} onClick={() => console.log(`View details for ${user.firstName}`)}>
                                <Table.RowCell>{user.name}</Table.RowCell>
                                <Table.RowCell>{user.age}</Table.RowCell>
                                <Table.RowCell>{user.role}</Table.RowCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Flex>
        );
    },
};

export const WithSelection: Story = {
    render: () => {
        const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

        const handleSelectAll = () => {
            if (selectedRows.size === TABLE_DATA.length) {
                setSelectedRows(new Set());
            } else {
                setSelectedRows(new Set(TABLE_DATA.map((user) => user.id)));
            }
        };

        const handleSelectRow = (event: FormEvent<HTMLButtonElement>, id: number) => {
            event.stopPropagation();
            const newSelection = new Set(selectedRows);
            if (newSelection.has(id)) {
                newSelection.delete(id);
            } else {
                newSelection.add(id);
            }
            setSelectedRows(newSelection);
        };

        const isAllSelected = selectedRows.size === TABLE_DATA.length;
        const isPartiallySelected = selectedRows.size > 0 && selectedRows.size < TABLE_DATA.length;

        return (
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Checkbox
                                value={isPartiallySelected ? 'indeterminate' : isAllSelected}
                                onChange={handleSelectAll}
                            />
                        </Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {TABLE_DATA.map((user) => (
                        <Table.Row
                            key={user.id}
                            selected={selectedRows.has(user.id)}
                            onClick={() => console.log(`View details for ${user.firstName}`)}
                        >
                            <Table.RowCell>
                                <Checkbox
                                    value={selectedRows.has(user.id)}
                                    onChange={(event) => handleSelectRow(event, user.id)}
                                />
                            </Table.RowCell>
                            <Table.RowCell>{user.name}</Table.RowCell>
                            <Table.RowCell>{user.age}</Table.RowCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        );
    },
};

export const CellAlignments: Story = {
    name: 'Cell Alignment Options',
    render: () => (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell align="left">Left Header</Table.HeaderCell>
                    <Table.HeaderCell align="center">Centered Header</Table.HeaderCell>
                    <Table.HeaderCell align="right">Right Header</Table.HeaderCell>
                    <Table.HeaderCell align="left">Mixed Alignment</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {TABLE_DATA.map((user) => (
                    <Table.Row key={user.id} onClick={() => console.log(`Clicked ${user.firstName}'s user`)}>
                        <Table.RowCell align="left">{user.firstName}</Table.RowCell>
                        <Table.RowCell align="center">{user.role}</Table.RowCell>
                        <Table.RowCell align="right">{user.age}</Table.RowCell>
                        <Table.RowCell>
                            <Flex justify="space-between" align="center">
                                <span>{user.invited}</span>
                                <span>{user.lastLogin}</span>
                            </Flex>
                        </Table.RowCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    ),
};

export const WidthControl: Story = {
    render: () => (
        <div style={{ width: '800px' }}>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="100px">Fixed Width & No Shrink</Table.HeaderCell>
                        <Table.HeaderCell width="100px" truncate>
                            Truncated Very Long Header Title That Should Be Cut Off
                        </Table.HeaderCell>
                        <Table.HeaderCell width="50%">Percentage Width</Table.HeaderCell>
                        <Table.HeaderCell>Auto Width</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {TABLE_DATA.map((user) => (
                        <Table.Row key={user.id}>
                            <Table.RowCell>Fixed Width Content</Table.RowCell>
                            <Table.RowCell truncate>
                                {`${user.firstName} ${user.lastName} - ${user.role} - ${user.lastLogin}`}
                            </Table.RowCell>
                            <Table.RowCell>Normal Cell</Table.RowCell>
                            <Table.RowCell>Auto Width Content</Table.RowCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    ),
};
