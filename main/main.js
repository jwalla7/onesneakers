// MENU EXTENSION
const logoTextTop = document.querySelector('.logo-text-top');
const logoTextCSide = document.querySelector('.logo-container-side');
const navBarCSide =  document.getElementById('navBar_ContainerS');
const menuExtension = document.querySelector('.nav-menu-extension');









// ONE LOGO HOVER
// logoTextCSide.addEventListener('mouseover', (trig) => {
//     navBarCSide.style.filter ='invert(100%)';
//     logoTextCSide.addEventListener('mouseleave', () => {
//         navBarCSide.style.filter = '';
//     })
// })
// ONE LONG LOGO HOVER





// BRAND INTRO ANIMATION
const nikeAdC = document.getElementById('nike-ad-goldenboy-container');
const nikeAdImg = document.getElementById('nike-ad-img-goldenboy');

nikeAdC.addEventListener('mouseenter', () => {
    // target
    setTimeout(() => {
        nikeAdImg.style.transition = '1.5s ease-in-out';
        nikeAdImg.style.transform = 'scale(1.15) translateY(-20%) translateX(10%)';
        setTimeout(() => {
            nikeAdImg.style.transform = 'translateY(-25%) translateX(100%)';
            nikeAdC.addEventListener('mousemove', () => {
                nikeAdImg.style.transform = 'translateX(100%)';
            })  
        }, 2500);
        clearTimeout();
    }, 1);
    
    // reset
    nikeAdC.addEventListener('mouseout', () => {
        clearTimeout();
        nikeAdImg.style.transition = '';
        nikeAdImg.style.transform = 'scale(0) translateY(-40%) translateX(0)';
    })
}, {once : true});









// NAVBAR OBSERVER COLOR ADAPT OPTIONS
const optionb = {
    rootMargin: '0% 0% 0% 0%',
    threshold: 0
}
const optionc = {
    rootMargin: '0% 50% 0% 0%',
    threshold: 0
}
const optiond = {
    rootMargin: '-50%',
    threshold: 0
}
const optione = {
    rootMargin: '0% 0% -100% 0%',
    threshold: 0
}
const optionf = {
    rootMargin: '19.5% 0% 0% 0%',
    threshold: 0
}
const optiong = {
    rootMargin: '0% -100% 0% 100%',
    threshold: 0
}
const optionh = {
    rootMargin: '0% -95% 0% 95%',
    threshold: 0
}
// NAVBAR COLOR ADAPT
const nav = document.getElementById('navBar_Container'); // visible                 Top Nav Container           No background
const logoC = document.getElementById('logo-text-top-container'); // visible        One long logo with          white background
const logoLngC = document.querySelector('.logo-long-text-container'); // visible    One long logo text only     black
const logoLngL = document.querySelector('.logo-long-text-letter'); // visible       One long logo text only     black
const navS2 = document.querySelector('.navBar-ContainerS2'); // visible             Top links and vects only
const logoS = document.querySelector('.logo-text-side'); // hidden                  One number logo only
const navSLinkTop = document.getElementById('navBar_LinkS2'); // visible            Top Link Just Dropped       white
const navSLinkTopA = document.getElementById('navBar_LinkS2a'); // visible          Top Link Culture            white
const navSLinkTopB = document.getElementById('navBar_LinkS2b'); // visible          Top Link About              white 
const navSVecTop = document.getElementById('navBar_LinkS3'); // visible             Top Link Vect 1             white
const navSVecTopA = document.getElementById('navBar_LinkS3a'); // visible           Top Link Vect 2             white
const navSVecTopB = document.getElementById('navBar_LinkS3b'); // visible           Top Link Vect 3             white
const navSVecTopC = document.getElementById('navBar_LinkS3c'); // visible           Top Link Vect 4             white
const navSLinkLft = document.getElementById('navBar_LinkS'); // hidden              Left Link By One Group      black
const navSLinkLfta = document.getElementById('navBar_LinkSa'); // hidden            Left Link Jamal             black
const navSLinkLftb = document.getElementById('navBar_LinkSb'); // hidden            Left Link Mazari            black
const navSLinkLftc = document.getElementById('navBar_LinkSc'); // hidden            Left Link Kumari            black
const navSLinkLftd = document.getElementById('navBar_LinkSd'); // hidden            Left Link Belay             black


// const adPage = document.getElementById('mainContainer');
// const adPageImg = document.getElementById('ad_BgImage');
// const observerIntroAd = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             logoLngC.style.color = 'white';
//         } else {
//         }
//     })
// }, optionb)
// observerIntroAd.observe(adPage);

// NIKE NAVBAR COLOR ADAPT
const nikeAd = document.getElementById('nikeAd');
const nikeAdS = document.querySelector('.two-One');
const observerNike = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            logoC.style.backgroundColor = 'transparent';
            navSLinkTop.style.color = 'black';
            navSLinkTopA.style.color = 'black';
            navSLinkTopB.style.color = 'black';
            navSVecTopC.style.fill = 'black';
            navSVecTop.style.fill = 'black';
            navSVecTopA.style.fill = 'black';
            navSVecTopB.style.fill = 'black';
        } else {
            logoC.style.backgroundColor = '';
            // navSLinkTop.style.color = '';
            // navSLinkTopA.style.color = '';
            // navSLinkTopB.style.color = '';
            navSVecTopC.style.fill = '';
            navSVecTop.style.fill = '';
            navSVecTopA.style.fill = '';
            navSVecTopB.style.fill = '';
        }
    })
}, optione);
observerNike.observe(nikeAd);

// ADIDAS COLLECTION SLIDESHOW
    // run
    let slideIndex = 0;
    let adidasSlide;
    const adidasSlideStart = () => {
        let y = document.getElementsByClassName('adidasShow');
        for (let i = 0; i < y.length; i++) {
            y[i].style.display ='none';
            console.log('slide:' + y[i]);
        }
        slideIndex++;
        console.log(slideIndex);
        if (slideIndex > y.length) {
            slideIndex = 1;
        }
        y[slideIndex - 1].style.display = 'block';
        adidasSlide = setTimeout(adidasSlideStart, 2000);
    };
    // stop
    const adidasSlideEnd = () => {
        clearTimeout(adidasSlide);
    }

// ADIDAS TOP NAV INVERT
const adidasAdImg = document.getElementById('two-Two_BgImage');
const vectorLinksW = document.getElementById('navBar_LinkWrapperSVec');
const observerAdidasImg = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // navSLinkTop.style.filter = 'invert(100%)';
            // navSLinkTopA.style.filter = 'invert(100%)';
            // navSLinkTopB.style.filter = 'invert(100%)';
            // navSVecTop.style.filter = 'invert(100%)';
            // navSVecTopA.style.filter = 'invert(100%)';
            // navSVecTopB.style.filter = 'invert(100%)';
            // navSVecTopC.style.filter = 'invert(100%)';
        } else {
            // navSLinkTop.style.filter = 'invert(0%)';
            // navSLinkTopA.style.filter = 'invert(0%)';
            // navSLinkTopB.style.filter = 'invert(0%)';
            // navSVecTop.style.filter = 'invert(0%)';
            // navSVecTopA.style.filter = 'invert(0%)';
            // navSVecTopB.style.filter = 'invert(0%)';
            // navSVecTopC.style.filter = 'invert(0%)';
        }
    })
}, vectorLinksW);
// observerAdidasImg.observe(adidasAdImg);

// NAVBAR COLOR ADAPT --- ADIDAS AD
const adidasAd = document.getElementById('adidasAd');
const adidasAdS = document.querySelector('.two-Two');
const adidasSShow = document.querySelector('.adidasShow');
// NAVBAR SIDE COLOR ADAPT --- ADIDAS AD
const observerAdidasS = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            adidasSlideStart();
            logoS.style.visibility = 'visible';
            navSLinkTop.style.color = 'black';
            navSLinkTopA.style.color = 'black';
            navSLinkTopB.style.color = 'black';
            logoC.style.visibility = 'hidden';
            navSVecTop.style.fill = 'black';
            navSVecTopA.style.fill = 'black';
            navSVecTopB.style.fill = 'black';
            navSVecTopC.style.fill = 'black';
            logoLngC.style.visibility = 'hidden';
            navSLinkLft.style.visibility = 'visible';
            navSLinkLfta.style.visibility = 'visible';
            navSLinkLftb.style.visibility = 'visible';
            navSLinkLftc.style.visibility = 'visible';
            navSLinkLftd.style.visibility = 'visible';
        } else {
            adidasSlideEnd();
            logoS.style.visibility = '';
            logoC.style.visibility = '';
            logoLngC.style.visibility = '';
            navSLinkTop.style.color = 'black';
            navSLinkTopA.style.color = 'black';
            navSLinkTopB.style.color = 'black';
            navSVecTop.style.fill = '';
            navSVecTopA.style.fill = '';
            navSVecTopB.style.fill = '';
            navSVecTopC.style.fill = '';
            navSLinkLft.style.visibility = '';
            navSLinkLfta.style.visibility = '';
            navSLinkLftb.style.visibility = '';
            navSLinkLftc.style.visibility = '';
            navSLinkLftd.style.visibility = '';
        }
    })
}, optiong);
observerAdidasS.observe(adidasAdS);

// NAVBAR COLOR ADAPT --- NEW BALANCE AD
const newbalanceAd = document.getElementById('newbalanceAd');
const newbalanceAdS= document.querySelector('.two-Three');
// NAVBAR SIDE COLOR ADAPT --- NEW BALANCE AD
const observerNewBalanceS = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            logoS.style.visibility = 'visible';
            logoLngC.style.visibility = 'hidden';
            navSLinkTop.style.color = 'black';
            navSLinkTopA.style.color = 'black';
            navSLinkTopB.style.color = 'black';
            logoC.style.visibility = 'hidden';
            navSVecTop.style.fill = 'black';
            navSVecTopA.style.fill = 'black';
            navSVecTopB.style.fill = 'black';
            navSVecTopC.style.fill = 'black';
            navSLinkLft.style.visibility = 'visible';
            navSLinkLfta.style.visibility = 'visible';
            navSLinkLftb.style.visibility = 'visible';
            navSLinkLftc.style.visibility = 'visible';
            navSLinkLftd.style.visibility = 'visible';
        } else {
            console.log('no change needed');
        }
    })
}, optiong);
observerNewBalanceS.observe(newbalanceAdS);




// NAVBAR COLOR ADAPT --- PUMA AD
const pumaAd = document.getElementById('pumaAd');
const pumaAdS= document.querySelector('.two-Four');
// NAVBAR SIDE COLOR ADAPT --- PUMA AD
const observerPumaS = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            logoS.style.visibility = 'visible';
            logoS.style.color = 'white';
            navSLinkTop.style.color = 'white';
            navSLinkTopA.style.color = 'white';
            navSLinkTopB.style.color = 'white';
            logoC.style.visibility = 'hidden';
            logoLngC.style.visibility = 'hidden';
            navSVecTop.style.fill = 'white';
            navSVecTopA.style.fill = 'white';
            navSVecTopB.style.fill = 'white';
            navSVecTopC.style.fill = 'white';
            navSLinkLft.style.visibility = 'visible';
            navSLinkLfta.style.visibility = 'visible';
            navSLinkLftb.style.visibility = 'visible';
            navSLinkLftc.style.visibility = 'visible';
            navSLinkLftd.style.visibility = 'visible';
            navSLinkLft.style.color = 'white';
            navSLinkLfta.style.color = 'white';
            navSLinkLftb.style.color = 'white';
            navSLinkLftc.style.color = 'white';
            navSLinkLftd.style.color = 'white';
        } else {
            logoS.style.visibility = '';
            logoS.style.color = 'black';
            // logoC.style.visibility = '';
            // logoLngC.style.visibility = '';
            navSLinkTop.style.color = '';
            navSLinkTopA.style.color = '';
            navSLinkTopB.style.color = '';
            navSVecTop.style.fill = '';
            navSVecTopA.style.fill = '';
            navSVecTopB.style.fill = '';
            navSVecTopC.style.fill = '';
            navSLinkLft.style.visibility = '';
            navSLinkLfta.style.visibility = '';
            navSLinkLftb.style.visibility = '';
            navSLinkLftc.style.visibility = '';
            navSLinkLftd.style.visibility = '';
            navSLinkLft.style.color = 'black';
            navSLinkLfta.style.color = 'black';
            navSLinkLftb.style.color = 'black';
            navSLinkLftc.style.color = 'black';
            navSLinkLftd.style.color = 'black';
        }
    })
}, optiong);
observerPumaS.observe(pumaAdS);

// NAVBAR COLOR ADAPT --- CONVERSE AD
const converseAd = document.getElementById('converseAd');
const converseNavLogo = document.getElementById('logo_Container');
const converseAdS = document.querySelector('.two-Five');
const observerConverse = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            logoS.style.visibility = 'hidden'; // Remove logo Number
            logoLngC.style.visibility = 'visible'; // ONE letters
            nav.classList.add('whiteNavBg'); // Bottom Border
            navSLinkLft.style.visibility = 'hidden';
            navSLinkLfta.style.visibility = 'hidden';
            navSLinkLftb.style.visibility = 'hidden';
            navSLinkLftc.style.visibility = 'hidden';
            navSLinkLftd.style.visibility = 'hidden';
            navSLinkTop.style.color = 'black';
            navSLinkTopA.style.color = 'black';
            navSLinkTopB.style.color = 'black';
            navSVecTopC.style.fill = 'black';
            navSVecTop.style.fill = 'black';
            navSVecTopA.style.fill = 'black';
            navSVecTopB.style.fill = 'black';

        } else {
            // logoS.style.visibility = '';
            // navS.style.visibility = '';
            // nav.style.visibility = '';
            // nav.classList.remove('whiteNavBg');
            // logoC.style.visibility = '';
            // logoC.style.borderBottom = '';
            // navSLinkLftC.style.visibility = '';
            // navSLinkTop.style.color = '';
            // navSLinkTopA.style.color = '';
            // navSLinkTopB.style.color = '';
            // navSVecTopC.style.fill = '';
            // navSVecTop.style.fill = '';
            // navSVecTopA.style.fill = '';
            // navSVecTopB.style.fill = '';
            logoS.style.visibility = ''; // Remove logo Number
            logoLngC.style.visibility = ''; // ONE letters
            nav.classList.remove('whiteNavBg'); // Bottom Border
            navSLinkLft.style.visibility = '';
            navSLinkLfta.style.visibility = '';
            navSLinkLftb.style.visibility = '';
            navSLinkLftc.style.visibility = '';
            navSLinkLftd.style.visibility = '';
            navSLinkTop.style.color = '';
            navSLinkTopA.style.color = '';
            navSLinkTopB.style.color = '';
            navSVecTopC.style.fill = '';
            navSVecTop.style.fill = '';
            navSVecTopA.style.fill = '';
            navSVecTopB.style.fill = '';
        }
    })
}, optionh);
observerConverse.observe(converseAdS);


// brand-intro, brand-WrapperThree, deals-intro, brand-WrapperDeals
//  navS Remove Observer
// const brand also const upCAnimation
const brand = document.querySelector('.brand-intro');
const brandWrap = document.querySelector('.brand-WrapperThree');
const deals = document.querySelector('.deals-intro');
const dealsWrap = document.querySelector('.brand-WrapperDeals');
const item = document.querySelector('.item-container');


const optionJ= {
    rootMargin: '0% 0% 0% 0%',
    threshold: 1
}

const cancelNavSObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // navS.style.display = 'none';
        } else {
            // navS.style.display = '';
        }
    })
}, optionJ)
cancelNavSObserver.observe(brand);
cancelNavSObserver.observe(brandWrap);
cancelNavSObserver.observe(deals);
cancelNavSObserver.observe(dealsWrap);
cancelNavSObserver.observe(item);









// UP & COMING OBSERVER 
const upCAnimation = document.querySelector('.brand-intro');
const upU = document.getElementById('lt1');
const upP = document.getElementById('lt2');
const upA = document.getElementById('lt3');
const upC = document.getElementById('lt4');
const upO = document.getElementById('lt5');
const upM = document.getElementById('lt6');
const upI = document.getElementById('lt7');
const upN = document.getElementById('lt8');
const upG = document.getElementById('lt9');

const optionH = {
    rootMargin: '100% 0% 0% 0%',
    threshold: 0.95
}

const brandScrollObserver = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                upU.style.animation = 'slide-in-bottom 1s ease';
                upU.style.transition = 'ease-in .75s';
                upU.style.transform = 'translateY(-35%)';

                setTimeout(() => {
                    upP.style.animation = 'slide-in-bottom 1s ease';
                    upP.style.transition = 'ease-in .75s';
                    upP.style.transform = 'translateY(-35%)';

                    setTimeout(() => {
                        upA.style.animation = 'slide-in-bottom 1s ease';
                        upA.style.transition = 'ease-in .75s';
                        upA.style.transform = 'translateY(-35%)';

                        setTimeout(() => {
                            upC.style.animation = 'slide-in-bottom 1s ease';
                            upC.style.transition = 'ease-in .75s';
                            upC.style.transform = 'translateY(-35%)';

                            setTimeout(() => {
                                upO.style.animation = 'slide-in-bottom 1s ease';
                                upO.style.transition = 'ease-in .75s';
                                upO.style.transform = 'translateY(-35%)';

                                setTimeout(() => {
                                    upM.style.animation = 'slide-in-bottom 1s ease';
                                    upM.style.transition = 'ease-in .75s';
                                    upM.style.transform = 'translateY(-35%)';

                                    setTimeout(() => {
                                        upI.style.animation = 'slide-in-bottom 1s ease';
                                        upI.style.transition = 'ease-in .75s';
                                        upI.style.transform = 'translateY(-35%)';

                                        setTimeout(() => {
                                            upN.style.animation = 'slide-in-bottom 1s ease';
                                            upN.style.transition = 'ease-in .75s';
                                            upN.style.transform = 'translateY(-35%)';

                                            setTimeout(() => {
                                                upG.style.animation = 'slide-in-bottom 1s ease';
                                                upG.style.transition = 'ease-in .75s';
                                                upG.style.transform = 'translateY(-35%)';

                                            }, 100)
                                        }, 100)
                                    }, 100)
                                }, 100)
                            }, 100)
                        }, 100)
                    }, 100)
                }, 100)
            }, 1)
        } else {
            upU.style.transform = '';
            upP.style.transform = '';
            upA.style.transform = '';
            upC.style.transform = '';
            upO.style.transform = '';
            upM.style.transform = '';
            upI.style.transform = '';
            upN.style.transform = '';
            upG.style.transform = '';
        }
    })
}, optionH)
brandScrollObserver.observe(upCAnimation);

// YEEZY OBSERVER
const yAnimation = document.querySelector('.deals-intro');
const yY = document.getElementById('deals-lt1');
const yE = document.getElementById('deals-lt2');
const yE1 = document.getElementById('deals-lt3');
const yZ = document.getElementById('deals-lt4');
const yY1 = document.getElementById('deals-lt5');
const yS = document.getElementById('deals-lt6');

const optionI = {
    rootMargin: '100% 0% 0% 0%',
    threshold: 0.95
}

const yeezyScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                yY.style.animation = 'slide-in-bottom 1s ease';
                yY.style.transition = 'ease-in .75s';
                yY.style.transform = 'translateY(-35%)';

                setTimeout(() => {
                    yE.style.animation = 'slide-in-bottom 1s ease';
                    yE.style.transition = 'ease-in .75s';
                    yE.style.transform = 'translateY(-35%)';

                    setTimeout(() => {
                        yE1.style.animation = 'slide-in-bottom 1s ease';
                        yE1.style.transition = 'ease-in .75s';
                        yE1.style.transform = 'translateY(-35%)';

                        setTimeout(() => {
                            yZ.style.animation = 'slide-in-bottom 1s ease';
                            yZ.style.transition = 'ease-in .75s';
                            yZ.style.transform = 'translateY(-35%)';

                            setTimeout(() => {
                                yY1.style.animation = 'slide-in-bottom 1s ease';
                                yY1.style.transition = 'ease-in .75s';
                                yY1.style.transform = 'translateY(-35%)';

                                setTimeout(() => {
                                    yS.style.animation = 'slide-in-bottom 1s ease';
                                    yS.style.transition = 'ease-in .75s';
                                    yS.style.transform = 'translateY(-35%)';
                                }, 100)
                            }, 100)
                        }, 100)
                    }, 100)
                }, 100)
            }, 100)
        } else {
            yY.style.transform = '';
            yE.style.transform = '';
            yE1.style.transform = '';
            yZ.style.transform = '';
            yY1.style.transform = '';
            yS.style.transform = ''; 
        }
    })
}, optionI)
yeezyScrollObserver.observe(yAnimation);