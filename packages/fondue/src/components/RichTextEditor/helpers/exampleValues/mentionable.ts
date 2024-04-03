/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MentionableCategory, type MentionableItems } from '@components/RichTextEditor/Plugins';

export const mentionable: MentionableItems = [
    { data: { id: 'true', category: MentionableCategory.ALL }, key: '0', text: 'All' },
    { data: { id: '1', category: MentionableCategory.GROUP }, key: '1', text: 'Adi Gallia' },
    {
        data: {
            id: '1111111111',
            category: MentionableCategory.GROUP,
            image: 'https://secure.gravatar.com/avatar/306bfbd0fba40f51c12bb08fa2e8bddb?d=mm&s=22',
        },
        key: '2',
        text: 'Admiral Dodd Rancit',
    },
    {
        data: {
            id: '2222222222',
            category: MentionableCategory.USER,
            image: 'https://secure.gravatar.com/avatar/306bfbd0fba40f51c12bb08fa2e8bddb?d=mm&s=22',
        },
        key: '3',
        text: 'Admiral Firmus Piett',
    },
    { data: { id: '3333333333', category: MentionableCategory.USER }, key: '4', text: 'Admiral Gial Ackbar' },
    { data: { id: 'aaaaaaaa01', category: MentionableCategory.USER }, key: '5', text: 'Admiral Ozzel' },
    { data: { id: 'aaaaaaaa02', category: MentionableCategory.USER }, key: '6', text: 'Admiral Raddus' },
    { data: { id: 'aaaaaaaa03', category: MentionableCategory.USER }, key: '7', text: 'Admiral Terrinald Screed' },
    { data: { id: 'aaaaaaaa04', category: MentionableCategory.USER }, key: '8', text: 'Admiral Trench' },
    { data: { id: 'aaaaaaaa05', category: MentionableCategory.USER }, key: '9', text: 'Admiral U.O. Statura' },
    { data: { id: 'aaaaaaaa06', category: MentionableCategory.USER }, key: '10', text: 'Agen Kolar' },
    { data: { id: 'aaaaaaaa07', category: MentionableCategory.USER }, key: '11', text: 'Agent Kallus' },
    { data: { id: 'aaaaaaaa08', category: MentionableCategory.USER }, key: '12', text: 'Aiolin and Morit Astarte' },
    { data: { id: 'aaaaaaaa09', category: MentionableCategory.USER }, key: '13', text: 'Aks Moe' },
    { data: { id: 'aaaaaaaa10', category: MentionableCategory.USER }, key: '14', text: 'Almec' },
    { data: { id: 'aaaaaaaa11', category: MentionableCategory.USER }, key: '15', text: 'Alton Kastle' },
    { data: { id: 'aaaaaaaa12', category: MentionableCategory.USER }, key: '16', text: 'Amee' },
    { data: { id: 'aaaaaaaa13', category: MentionableCategory.USER }, key: '17', text: 'AP-5' },
    { data: { id: 'aaaaaaaa14', category: MentionableCategory.USER }, key: '18', text: 'Armitage Hux' },
    { data: { id: 'aaaaaaaa15', category: MentionableCategory.USER }, key: '19', text: 'Artoo' },
    { data: { id: 'aaaaaaaa16', category: MentionableCategory.USER }, key: '20', text: 'Arvel Crynyd' },
    { data: { id: 'aaaaaaaa17', category: MentionableCategory.USER }, key: '21', text: 'Asajj Ventress' },
    { data: { id: 'aaaaaaaa18', category: MentionableCategory.USER }, key: '22', text: 'Aurra Sing' },
    { data: { id: 'aaaaaaaa19', category: MentionableCategory.USER }, key: '23', text: 'AZI-3' },
    { data: { id: 'aaaaaaaa20', category: MentionableCategory.USER }, key: '24', text: 'Bala-Tik' },
    { data: { id: 'aaaaaaaa21', category: MentionableCategory.USER }, key: '25', text: 'Barada' },
    { data: { id: 'aaaaaaaa22', category: MentionableCategory.USER }, key: '26', text: 'Bargwill Tomder' },
    { data: { id: 'aaaaaaaa23', category: MentionableCategory.USER }, key: '27', text: 'Baron Papanoida' },
    { data: { id: 'aaaaaaaa24', category: MentionableCategory.USER }, key: '28', text: 'Admiral Dodd Rancit II' },
    { data: { id: 'aaaaaaaa25', category: MentionableCategory.USER }, key: '29', text: 'Baze Malbus' },
    { data: { id: 'aaaaaaaa26', category: MentionableCategory.USER }, key: '30', text: 'Bazine Netal' },
    { data: { id: 'aaaaaaaa27', category: MentionableCategory.USER }, key: '31', text: 'BB-8' },
    { data: { id: 'aaaaaaaa28', category: MentionableCategory.USER }, key: '32', text: 'BB-9E' },
    { data: { id: 'aaaaaaaa29', category: MentionableCategory.USER }, key: '33', text: 'Ben Quadinaros' },
    { data: { id: 'aaaaaaaa30', category: MentionableCategory.USER }, key: '34', text: 'Berch Teller' },
    { data: { id: 'aaaaaaaa31', category: MentionableCategory.USER }, key: '35', text: 'Beru Lars' },
    { data: { id: 'aaaaaaaa32', category: MentionableCategory.USER }, key: '36', text: 'Bib Fortuna' },
    { data: { id: 'aaaaaaaa33', category: MentionableCategory.USER }, key: '37', text: 'Biggs Darklighter' },
    { data: { id: 'aaaaaaaa34', category: MentionableCategory.USER }, key: '38', text: 'Black Krrsantan' },
    { data: { id: 'aaaaaaaa35', category: MentionableCategory.USER }, key: '39', text: 'Bo-Katan Kryze' },
    { data: { id: 'aaaaaaaa36', category: MentionableCategory.USER }, key: '40', text: 'Boba Fett' },
    { data: { id: 'aaaaaaaa37', category: MentionableCategory.USER }, key: '41', text: 'Bobbajo' },
    { data: { id: 'aaaaaaaa38', category: MentionableCategory.USER }, key: '42', text: 'Bodhi Rook' },
    { data: { id: 'aaaaaaaa39', category: MentionableCategory.USER }, key: '43', text: 'Borvo the Hutt' },
    { data: { id: 'aaaaaaaa40', category: MentionableCategory.USER }, key: '44', text: 'Boss Nass' },
    { data: { id: 'aaaaaaaa41', category: MentionableCategory.USER }, key: '45', text: 'Bossk' },
    { data: { id: 'aaaaaaaa42', category: MentionableCategory.USER }, key: '46', text: 'Breha Antilles-Organa' },
    { data: { id: 'aaaaaaaa43', category: MentionableCategory.USER }, key: '47', text: 'Bren Derlin' },
    { data: { id: 'aaaaaaaa44', category: MentionableCategory.USER }, key: '48', text: 'Brendol Hux' },
    { data: { id: 'aaaaaaaa45', category: MentionableCategory.USER }, key: '49', text: 'BT-1' },
    { data: { id: 'aaaaaaaa46', category: MentionableCategory.USER }, key: '50', text: 'C-3PO' },
];
