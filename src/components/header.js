const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //

  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

  const head = document.createElement("div");
  head.classList.add("header");
  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = date;
  const titleH1 = document.createElement("h1");
  titleH1.textContent = title;
  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.textContent = temp;

  //
  head.appendChild(dateSpan);
  head.appendChild(titleH1);
  head.appendChild(tempSpan);

  return head;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerCont = document.querySelector(selector);
  headerCont.appendChild(Header("Lambda Times", "February 12th, 2050", "60"));
};

export { Header, headerAppender };
