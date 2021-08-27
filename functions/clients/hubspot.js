const fetch = require('node-fetch');

exports.updateHubspot = (customerEmail, treeCount, treeLocation, treesPerMonth) => {
    try {
        const profileLink = `https://profile.carbonforest.org/?cust=${customerEmail}`;
        const hubspotUrl = `https://api.hubapi.com/contacts/v1/contact/email/${customerEmail}/profile?hapikey=01cedbcc-2865-4314-a088-3c1f74309b63`;
        const hubspotPayload = {
            properties: [
                {
                    property: 'total_trees_planted',
                    value: treeCount,
                },
                {
                    property: 'number_of_trees_planted',
                    value: treesPerMonth,
                },
                {
                    property: 'profile_url',
                    value: profileLink,
                },
                {
                    property: 'tree_location',
                    value: treeLocation,
                },
            ],
        };

        fetch(hubspotUrl, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(hubspotPayload),
        });
    } catch (e) {
        console.log('hubspot request error: ', e);
    }
};
