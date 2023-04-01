const mainList = document.getElementById("categories");
const mainListItemsArray = [...mainList.children].filter((child) =>
  child.classList.contains("item")
);
const categoriesNumber = mainListItemsArray.length;

function showItemInfo(element) {
  console.log(
    `%c Category: \x1B[38;2;0;51;204;1m${element.children[0].textContent}\x1B[m`,
    clgDescriptionStyle
  );

  console.log(
    `%c Elements \x1B[38;2;0;51;204;1m${element.children[1].children.length}\x1B[m \n `,
    clgDescriptionStyle
  );
}

// clgDescriptionStyle and \x1B[ ... - add stylization for console.log
const clgDescriptionStyle = "color: dodgerblue; font-style: italic;";

console.log(
  `%c Number of categories: \x1B[38;2;0;51;204;1m${categoriesNumber}\x1B[m \n `,
  clgDescriptionStyle
);

mainListItemsArray.forEach(showItemInfo);
