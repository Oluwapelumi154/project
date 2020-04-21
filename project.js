//DOM SELECTION OF ELEMENT
var input = document.getElementById("text-5");
var btnAdd = document.getElementById("button-2");
var main = document.getElementById("main");



function CreateElement(type, classname) {
    var Element = document.createElement(type);
    if (classname) {
        Element.className = classname;
    }
    return Element;
}

function CreateUl(classname) {
    var ul = CreateElement("ul", classname);
    return ul;

}

function CreateParagraph(text) {
    var p = CreateElement("p");
    p.innerText = text;
    return p;
}

function CreateParagraph2(text, classname) {
    var p = CreateElement("p", classname);
    p.innerText = text;
    return p;
}

function CreateButton(text, classname, datapurpose) {
    var button = CreateElement("button", classname);
    button.innerText = text;
    button.setAttribute("data-purpose", datapurpose);
    return button;
}


function CreateDiv(classname) {
    var div = CreateElement("div", classname);

    return div;
}

function CreateDiv2() {
    var div = CreateDiv("into-2");
    var p = CreateParagraph2("CGPA", "final");
    div.appendChild(p);
    var btn = CreateDiv("buttons");
    var form = CreateInput("text-1", "Total");
    btn.appendChild(form);
    div.appendChild(btn);



    return div;

}




function CreateInput(classname, placeholder) {
    var input = CreateElement("input", classname);
    input.setAttribute("placeholder", placeholder);
    return input;

}




function Createli(text) {
    var li = CreateElement("li", "into-1");
    var pa = CreateParagraph(text);
    var D = CreateDiv("buttons");
    var Removebtn = CreateButton("Remove", "remove", "remove");
    var form = CreateInput("text-1", "score");
    var form1 = CreateInput("text-1", "unit");
    var form2 = CreateInput("text-1", "Total");



    D.appendChild(form1);
    li.appendChild(pa);

    D.appendChild(form);
    li.appendChild(pa);
    D.appendChild(Removebtn);
    li.appendChild(D);

    return li;
}



input.addEventListener("keyup", function(e) {

    if (input.value.length > 0) {
        if (e.keyCode === 13) {
            var into = Createli(input.value);
            if (main.querySelector(".into-1") === null) {
                var p = document.querySelector(".note");
                main.removeChild(p);
                var ul = CreateUl("courses");
                ul.appendChild(into);
                main.appendChild(ul);

            } else {

                var f = document.querySelector(".courses");
                f.appendChild(into);


            }
            var s = document.querySelector(".courses");
            console.log(s);


            if (main.querySelector(".into-2") === null) {
                var div = CreateDiv2();
                main.appendChild(div);
            }

            input.value = "";


        }



    }



});


main.addEventListener("click", function(e) {

    if (e.target.nodeName === "BUTTON") {
        var button = e.target;
        var div2 = main.querySelector(".into-2");
        var li = button.parentElement.parentElement;
        var ul = li.parentElement;


        ul.removeChild(li);

        if (ul.children.length === 0) {
            main.removeChild(div2);
            var courses = document.querySelector(".courses");
            var para2 = CreateParagraph2("No courses Available", "note");
            main.removeChild(courses);
            main.appendChild(para2);

        }

    }
    if (e.target.nodeName === "INPUT") {
        var input = e.target;
        var type = input.getAttribute("placeholder");
        switch (type) {
            case "unit":
                input.addEventListener("keyup", function(e) {
                    if (input.value.length === 1) {
                        var unitarry = [];
                        unitarry.push(input.value);
                        return unitarry;
                    }
                });


        }
    }


});






btnAdd.addEventListener("click", function(e) {

    if (input.value.length > 0) {
        var into = Createli(input.value);
        if (main.querySelector(".into-1") === null) {
            var p = document.querySelector(".note");
            main.removeChild(p);
            var ul = CreateUl("courses");
            ul.appendChild(into);
            main.appendChild(ul);

        } else {

            var s = document.querySelector(".courses");
            s.appendChild(into);

        }
        if (main.querySelector(".into-2") === null) {
            var div = CreateDiv2();
            main.appendChild(div);
        }
        input.value = "";


    }

});


/*function name() {
                var res = [];
                if (arguments.length > 2) {
                    res.push(arguments);
                }
                return res;
            }                 console.log(name(1, 3, 5));*/