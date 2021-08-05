const fetch = require('node-fetch');

exports.updateHubspot = async (customerEmail, treeCount, product, offsetPercentage) => {
    try{
        const profileLink = `https://profile.carbonforest.org/?cust=${customerEmail}`;
        const hubspotUrl = `https://api.hubapi.com/contacts/v1/contact/email/${customerEmail}/profile?hapikey=b07c8afe-6d43-483e-845b-168ac794af97`;
        const hubspotPayload = {
            properties: [
                {
                    property: 'treecount',
                    value: treeCount,
                },
                {
                    property: 'product',
                    value: product,
                },
                {
                    property: 'carbon_offset_percentage',
                    value: offsetPercentage,
                },
                {
                    property: 'profile_link',
                    value: profileLink,
                },
            ],
        };

        await fetch(hubspotUrl, {
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
    } catch(e){
        console.log('hubspot request error: ',e);
    }
}