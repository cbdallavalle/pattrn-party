// const mockData = require("./__mocks__/mock-data.js")
// import mockData from "./__mocks__/mock-data.js";

const codePens = {
  tab1: "https://codepen.io/ivhed/pen/RpRmgd",
  tab2: "https://codepen.io/josbert/pen/vRZWzR", 
  tab3: "https://codepen.io/AliKlein/pen/XERJNE",
  tab4: "https://codepen.io/z-/pen/pLwjVo"
}

$(this).ready(() => {
  changeTabInfo("tab1");
  insertTabInformation({name: 'tab1'});
});

checkWindowWidth = () => {
  return $(this).width();
}

changeTabInfo = (tab) => {
  $('a').attr('href', codePens[tab])
}

changeActiveButton = (target) => {
  const buttons = $('button');

  buttons.each( index => {
    if(buttons[index].name === target.name) {
      $(buttons[index]).removeClass("inactive")
      $(buttons[index]).addClass("active")
    } else {
      $(buttons[index]).removeClass("active")
      $(buttons[index]).addClass("inactive")
    }
  })
}

insertTabInformation = (target) => {
  if ($(this).width() > 500) {
    $('section').empty();
    $('section').append( `      
      <div class="image"></div>
      <div class="info-cont">
        <h3>Lorem ipsum dolor sit amet, consectetue</h3>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
           nonummy nibh euismod tincidunt ut laoreet dolore magna
           aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
           exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
           commodo consequat.
           Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
           molestie consequat, vel illum dolore eu feugiat nulla facilisis at
           vero eros et accumsan et iusto odio dignissim qui blandit.
        </p>
      </div>`);
  } else {
    $('.image').remove(),
    $('.info-cont').remove(),
    $(`button[name=${target.name}]`).after(`      
        <div class="image"></div>
        <div class="info-cont">
          <h3>Lorem ipsum dolor sit amet, consectetue</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
             nonummy nibh euismod tincidunt ut laoreet dolore magna
             aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
             exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
             commodo consequat.
             Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
             molestie consequat, vel illum dolore eu feugiat nulla facilisis at
             vero eros et accumsan et iusto odio dignissim qui blandit.
          </p>
        </div>
    `)
  } 
}

$('nav').on('click', 'button', function (event) {
  changeActiveButton(event.target)
  changeTabInfo(event.target.name)
  insertTabInformation(event.target)
})