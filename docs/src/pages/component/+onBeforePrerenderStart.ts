/* (c) Copyright Frontify Ltd., all rights reserved. */

export { onBeforePrerenderStart };

async function onBeforePrerenderStart() {
    console.log('TEST');

    return ['/component/ggg', '/component/aaaa', '/component/bbb'];
}
