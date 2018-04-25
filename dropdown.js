function dropDown() {
    var dropDown = document.getElementsByClassName("dropDown");
    var dropDownContent = document.getElementsByClassName("dropDownContent");
    var dropDownChildren = document.createElement("a");
    var dropDownChildrenL = document.createElement("l");
    var dropDownSubmenu = document.getElementsByClassName("dropDownSubmenu");
    var dropDownSubmenuContent = document.getElementsByClassName("dropDownSubmenuContent");
    var dropDownSubmenuChildren = document.createElement("a");
    var dropDownSubmenuChildrenL = document.createElement("l");
    for (var i = 0; i < 2; i++) {
        if (dropDown[i] = querySelectorAll(".dropDown:hover")[i]) {
            if (i == 0) {
                for (var i1DD = 0; i1DD < 2; i1DD++) {
                    if (i1DD == 0) {
                        dropDownContent[i1DD].dropDownChildren;
                        dropDownChildren.href("#");
                        dropDownChildren.dropDownChildrenL;
                        dropDownChildrenL.innerHTML = "Merchandise";
                    } else {
                        dropDownContent[i].dropDownChildren;
                        dropDownChildren.href("#");
                        dropDownChildren.dropDownChildrenL;
                        dropDownChildrenL.innerHTML = "Donations";                    
                    }
                } 
            } else {
                for (var i2DD = 0; i1DD < 2; i1DD++) {
                    if (i2DD == 0) {
                        dropDownContent[i1DD].dropDownChildren;
                        dropDownChildren.href("#");
                        dropDownChildren.dropDownChildrenL;
                        dropDownChildrenL.innerHTML = "Therapist";
                        for (var iS0 = 0; iS0 < 2; iS0++) {
                            if (dropDownSubmenu[iS0] = querySelectorAll(".dropDownSubmenu:hover")[iS0]) {
                              if (iS0 == 0) {
                                  for (var i1DDS = 0; i1DDS < 2; i1DDS++) {
                                      if (i1DDS = 0) {
                                        dropDownSubmenuContent[i1DDS].dropDownSubmenuChildren;
                                        dropDownSubmenuChildren.href("#")  
                                        dropDownSubmenuChildren.dropDownSubmenuChildrenL
                                        dropDownSubmenuChildrenL.innerHTML = "Log In"
                                      } else {
                                        dropDownSubmenuContent[i1DDS].dropDownSubmenuChildren;
                                        dropDownSubmenuChildren.href("#")  
                                        dropDownSubmenuChildren.dropDownSubmenuChildrenL
                                        dropDownSubmenuChildrenL.innerHTML = "Sign Up"
                                      }    
                                    }
                                }
                            }
                        }
                    } else {
                        dropDownContent[i].dropDownChildren;
                        dropDownChildren.href("#");
                        dropDownChildren.dropDownChildrenL;
                        dropDownChildrenL.innerHTML = "Patient";
                        for (var iS1 = 0; iS1 < 2; iS1++) {
                            if (dropDownSubmenu[iS1] = querySelectorAll(".dropDownSubmenu:hover")[iS1]) {
                              if (iS1 == 0) {
                                  for (var i2DDS = 0; i1DDS < 2; i2DDS++) {
                                      if (i2DDS = 0) {
                                        dropDownSubmenuContent[i2DDS].dropDownSubmenuChildren;
                                        dropDownSubmenuChildren.href("#")  
                                        dropDownSubmenuChildren.dropDownSubmenuChildrenL
                                        dropDownSubmenuChildrenL.innerHTML = "Log In"
                                      } else {
                                        dropDownSubmenuContent[i2DDS].dropDownSubmenuChildren;
                                        dropDownSubmenuChildren.href("#")  
                                        dropDownSubmenuChildren.dropDownSubmenuChildrenL
                                        dropDownSubmenuChildrenL.innerHTML = "Sign Up"
                                      }    
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

window.addEventListener("load", dropDown);