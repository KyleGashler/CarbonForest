exports.treeLocator = (state) => {
    try {
        let location = treeLocationMap[state.toLowerCase()];
        if (!location) location = 'California';
        return location;
    } catch (e) {
        return 'California';
    }
};

const treeLocationMap = {
    alabama: 'Pennsylvania',
    alaska: 'California',
    arizona: 'California',
    arkansas: 'Colorado',
    california: 'California',
    colorado: 'California',
    connecticut: 'Pennsylvania',
    delaware: 'Pennsylvania',
    florida: 'Colorado',
    georgia: 'Colorado',
    hawaii: 'California',
    idaho: 'California',
    illinois: 'Colorado',
    indiana: 'Colorado',
    iowa: 'Colorado',
    kansas: 'Colorado',
    kentucky: 'Colorado',
    louisiana: 'Colorado',
    maine: 'Pennsylvania',
    maryland: 'Pennsylvania',
    massachusetts: 'Pennsylvania',
    michigan: 'Colorado',
    minnesota: 'Colorado',
    mississippi: 'Colorado',
    missouri: 'Colorado',
    montana: 'California',
    nebraska: 'Colorado',
    nevada: 'California',
    'new hampshire': 'Pennsylvania',
    'new jersey': 'Pennsylvania',
    'new mexico': 'California',
    'new york': 'Pennsylvania',
    'north carolina': 'Colorado',
    'north dakota': 'Colorado',
    ohio: 'Colorado',
    oklahoma: 'Colorado',
    oregon: 'California',
    pennsylvania: 'Pennsylvania',
    'rhode island': 'Pennsylvania',
    'south carolina': 'Colorado',
    'south dakota': 'Colorado',
    tennessee: 'Colorado',
    texas: 'Colorado',
    utah: 'Colorado',
    vermont: 'Pennsylvania',
    virginia: 'Pennsylvania',
    washington: 'California',
    'west virginia': 'Colorado',
    wisconsin: 'Colorado',
    wyoming: 'Colorado',
};