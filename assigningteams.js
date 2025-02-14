function init() {
    console.log('logger: running custom code for carstore');
    
    const location = document.querySelector('.product-page-location')?.textContent;
if(location) {
    const foundEmail = getEmailForLocation(location);
    
    // Set dynamic email
    if (window.sfDynamicEmail && window.sfDynamicEmail.length > 3) {
        window.sfDynamicEmail += `, ${foundEmail}`
    } else {
        window.sfDynamicEmail = foundEmail
    }
    
    const carData = getCarDetails();
    
    if (window.sfDynamicData) {
        window.sfDynamicData = {...window.sfDynamicData, ...carData};
    } else {
        window.sfDynamicData = {...carData}
    }
}
}

function getCarDetails() {
    let data = {};
    
    let overviewItems = document.querySelectorAll('.product-page__overview-item')
    
    if (overviewItems) overviewItems = Array.from(overviewItems);
    
    const registrationNumber = overviewItems[5]?.children[1]?.children[1]?.textContent;
    
    if (registrationNumber) data.carRegNo = registrationNumber;
    
    const metaContainer = document.querySelector('.product-page__meta')
        ?.children[0]
        ?.children[0]
    
    if (metaContainer) {
        const metaSpan = metaContainer.querySelector('span');
        if (metaSpan) metaContainer.removeChild(metaSpan);
    }
    
    const [carMake, carModel] = metaContainer.textContent.trimStart().trimEnd().split(' ');
    
    if (carMake) data.carMake = carMake;
    if (carModel) data.carModel = carModel;
    
    return data;
}

function getEmailForLocation(location) {
    location = location && location.toLowerCase();
    
    const locationToEmail = {
        "konala": "35800785.H20.chat.USED_CAR_SALES@leads.eu.keyloop.io",
        "helsinki": "35800785.H20.chat.USED_CAR_SALES@leads.eu.keyloop.io",
        "tampere": "35800785.T20.chat.USED_CAR_SALES@leads.eu.keyloop.io"
    }
    
    const keys = Object.keys(locationToEmail);
    
    for (let key of keys) {
        if (location.includes(key)) return locationToEmail[key];
    }
}

init();
