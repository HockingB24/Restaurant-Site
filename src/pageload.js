
const homeLoad = () => {
    const contentDiv = document.querySelector("#content");

    let myImage = document.createElement("img");
    myImage.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F02%2Fbarbuzzo-best-italian-restaurants-philly-FT-BLOG0218.jpg";
    myImage.alt = "Spaghetti on a plate";
    myImage.setAttribute("width", "400");
    myImage.setAttribute("height", "400");

    let topHeading = document.createElement("h1");
    topHeading.innerHTML = "Mama Mia's Italian Restaurante";
    topHeading.classList.add('homeHead');
    let para1 = document.createElement("p");
    para1.classList.add('homePara');

    para1.innerHTML = ("Welcome to our Restaurant's website! We serve only the finest Italian food, with ingredients sourced straight from Italy. You're going to love our dishes!");



    contentDiv.appendChild(myImage);
    contentDiv.appendChild(topHeading);
    contentDiv.appendChild(para1);

}

const contactLoad = () => {
    const contentDiv = document.querySelector("#content");
    let phoneNum = document.createElement("p");
    phoneNum.innerHTML = "111-222-1234";

    let emailAddress = document.createElement("p");
    emailAddress.innerHTML = "realEmail@gmail.com";

    let restaurantAddress = document.createElement("p");
    restaurantAddress.innerHTML = "123 Restaurante Drive, New York City, NY"

    contentDiv.appendChild(phoneNum);
    contentDiv.appendChild(emailAddress);
    contentDiv.appendChild(restaurantAddress);
}

const menuLoad = () => {

    const contentDiv = document.querySelector('#content');

    //Item 1: Spaghetti
    let spgImg = "https://www.foodiecrush.com/wp-content/uploads/2017/09/My-Moms-Homemade-Spaghetti-and-Meat-Sauce-foodiecrush.com-017-683x1024-1.jpg";
    let spgAltText = "Spaghetti with Meatballs"
    let spgHeading = 'Spaghetti with Meatballs';
    let spgDesc = "Spaghetti and Meatballs served with Pasta Sauce and Parmesan Cheese"
    let spaghetDiv = menuItem(spgImg, spgAltText, spgHeading, spgDesc);

    //Item 2: Lasagna
    let lsgImg = "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg";
    let lsgAltText = "Lasagna";
    let lsgHeading = "Lasagna with Ground Beef";
    let lsgDesc = "Lasagna served with Ground Beef and Italian Sausage on the inside"
    let lasagnaDiv = menuItem(lsgImg, lsgAltText, lsgHeading, lsgDesc);

    //Item 3: Fettucine Alfredo
    let fetImg = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8135663.jpg";
    let fetAltText = "Fettucine Alfredo";
    let fetHeading = "Fettucine Alfredo";
    let fetDesc = "Dish of fettucine served in a sauce of cream, butter, and Parmesan cheese";
    let fettucineDiv = menuItem(fetImg, fetAltText, fetHeading, fetDesc);

    contentDiv.appendChild(spaghetDiv);
    contentDiv.appendChild(lasagnaDiv);
    content.appendChild(fettucineDiv);
}

const menuItem = (imgSrc, altText, menuHead, menuDesc) => {

    const contentDiv = document.querySelector('#content');

    let itemDiv = document.createElement('div');

    let itemPic = document.createElement("img");
    itemPic.src = imgSrc;
    itemPic.alt = altText;
    itemPic.setAttribute("width", "300");
    itemPic.setAttribute("height", "300");

    let itemHeading = document.createElement("h2");
    itemHeading.innerHTML = menuHead;

    let itemDesc = document.createElement("p");
    itemDesc.innerHTML = menuDesc;

    itemDiv.appendChild(itemPic);
    itemDiv.appendChild(itemHeading);
    itemDiv.appendChild(itemDesc);
    itemDiv.classList.add('menuItem');
    return itemDiv;
}


export {
    homeLoad,
    contactLoad,
    menuLoad,
}