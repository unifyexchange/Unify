const version = 1.0;

const aboutSection = [
  {
    no: "",
    title: "",
    description: [
      "Unify was created by two University of Redlands students, Ryan McDuffie and Floris Van der Vis in order to make buying and selling used items for students easier, " +
        "quicker, and most importantly, safer. Apps like Craigslist and OfferUp are great, but they pose several important issues. When using these apps, you " +
        "are meeting up with a complete stranger, which can be risky. Aside from this, you must find a way to get " +
        "off campus to meet the person, which is another hassle in itself.",
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: "",
    title: "",
    description: [
      `With Unify, these issues are tackled. Only students and faculty of your University community can access
    to the platform, and we can all agree that meeting with another student from your University is a lot
    more comfortable than meeting a complete stranger. Secondly, these transactions can happen on or
    near campus, meaning students without cars will not have to find a way to retrieve or sell their item.`,
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: "",
    title: "",
    description: [
      `At the end of the year, we noticed that students were throwing out perfectly good items such as
    couches, mini fridges, and other items that could have been reused by someone else. With Unify,
    students are easily able to broadcast the items they no longer want to the whole University community
    and can earn a quick buck on things they would normally throw away. Together, we can earn some extra
    money, save a little, and help cut down on unnecessary environmental waste caused by students
    throwing out items that can be sold and reused!`,
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: "",
    title: "What you CAN do on Unify",
    description: [
      "Browse through listings, or search for items you need",
      "Upload listings and sell items you no longer need.",
      "Message and chat with sellers or buyers and negotiate deals on items",
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: "",
    title: "What you CAN’T do on Unify",
    description: [
      `Post content which may be offensive, illegal or violate the rights of any person or entity,
      or harm or threaten the safety of any person or entity `,
      `Threaten, harass, or exploit other users.`,
      `You are solely responsible for the Content that you post on Unify and any material or
       information that you transmit to other Users and for your interactions with other Users`,
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: "",
    title: "Tips for a Safe Exchange",
    description: [
      `Agree to meet in a public place on campus, where there are usually many people`,
      `We suggest to always bring a friend, if possible`,
      `If you do not personally know the seller or buyer, ask around and see if anyone might know them`,
      `Try to avoid meeting at night; it is best to exchange in broad daylight`,
      `Talk beforehand with the Seller or Buyer and determine how payment will be made`,
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: "",
    title: "Tips for a good listing",
    description: [
      `Think of a catchy, short title that describes the item well. In the description put some brief info on the condition, why you’re selling it, or why someone should buy your item. Make sure to be honest, the buyer could be driven away by misinformation!`,
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },

  {
    no: "",
    title: "How to add a listing",
    description: [
      `Click “Sell on Unify"`,
      `Input a Category, Item Name, Subtitle, Description, and Condition; then pick your price!`,
      ``,
      `Click Upload Item and you’re ready to start selling on Unify `,
    ],
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },

  {
    no: "",
    title: "How to view your listings",
    description: [
      `Your listings appear under Listed Items on the right side of the page. From here you can view or  
      delete your listing by clicking on it `,
    ],
    break: false,
    subDescription: false,
    subItem: true,
    newLine: true,
    subHeader: "",
  },

  {
    no: "",
    title: "How to delete a listing",
    description: [
      `Navigate to the Listed Items section on the right side of page.`,
      `Click on the desired listing`,
      `Click delete. *Once items are deleted, they are gone for good`,
    ],
    break: false,
    subDescription: false,
    subItem: true,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "How to search for a listing",
    description: [
      `Navigate to the search bar at the top of the page`,
      `Type keywords or the title of the item you are looking for and click search, or hit enter `,
    ],
    break: false,
    subDescription: false,
    subItem: true,
    newLine: true,
    subHeader: "",
  },

  {
    no: "",
    title: "How to favorite a listing",
    description: [
      `Hover over the favourite (Heart) icon`,
      `Click on it, and it will turn green.`,
      `The listing is now saved`,
    ],
    break: true,
    subDescription: false,
    subItem: true,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "How to view saved listings",
    description: [
      `Your saved listings appear under the Favorites section on the right side of the page. From here 
      you can browse through your favorited items`,
    ],
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "How to report a listing",
    description: [
      `Click “Report” on a listing you want to report`,
      `Enter a title and a brief description, Click on Report Item.`,
    ],
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "How to view status of reported listing",
    description: [
      `Click “Report” on any listing.`,
      `Click View Reports`,
      `Your reported listings are stored here. From this page you can check the status of the report, get 
      a ticket ID, and view the report details`,
    ],
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "How to message a seller",
    description: [
      `Click on a listing you are interested in`,
      `Click the Message Seller button`,
      `A default message will appear, or you can type your own`,
      `To access previous conversations, click on the Messages tab at the top of the page `,
    ],
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "How to Logout of Unify",
    description: [
      `Navigate to the My Account tab at the top of the page,`,
      `Click My Account, and then click Logout`,
    ],
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "Can you pay on the Unify app?",
    description: [
      `Unfortunately, at this time there is no payment via the app `,
    ],
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description: [
      `You should communicate with the seller/buyer and figure out a payment method that 
      works for both of you (Cash, Venmo, Check, etc.)`,
    ],
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
];

export { aboutSection };
