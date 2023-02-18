"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 2224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/heroSkillsProgress.js
const heroSkillsProgress = ()=>{
    if (document.querySelector(".hero-sec .skills-box")) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (document.querySelector(".hero-sec")) {
                    if (window.pageYOffset > document.querySelector(".hero-sec").offsetTop - 800) {
                        item.style.width = myVal;
                    }
                }
            });
        });
    }
};
/* harmony default export */ const common_heroSkillsProgress = (heroSkillsProgress);

// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/components/About-with-skills/index.jsx




const AboutWithSkills = ()=>{
    external_react_default().useEffect(()=>{
        common_heroSkillsProgress();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero-sec section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "About Me"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "main-title wow",
                                        "data-splitting": true,
                                        children: "My mission is design develop the best Websites around."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: "Hello! I’m Guilherme Oliveira. Com experi\xeancia de 1 ano e 5 meses em desenvolvimento de aplica\xe7\xf5e web e mobile. Tenho habilidades s\xf3lidas em linguagens de programa\xe7\xe3o como Java, Python e JavaScript, bem como experi\xeancia em frameworks front-end como React e Angular. Tamb\xe9m tenho conhecimento profundo em banco de dados, incluindo MySQL, MongoDB e Firebase."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: "Tenho a habilidade de trabalhar em projetos de ponta a ponta, desde o planejamento inicial at\xe9 a implementa\xe7\xe3o e manuten\xe7\xe3o."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/pdf/Curr\xedculo Front-end Guilherme Rodrigues Oliveira.pdf",
                                    className: "simple-btn mt-40",
                                    children: "Download C.V"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "skills-box full-width",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "UI / UX Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "45%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Front-end"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "75%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Back-end"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "50%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "CMS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "90%"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About_with_skills = (AboutWithSkills);

// EXTERNAL MODULE: ./src/components/Footer/index.jsx
var Footer = __webpack_require__(1690);
;// CONCATENATED MODULE: ./src/components/Intro-txt/index.jsx


const IntroTxt = ({ subBG  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`,
        /* style={{ backgroundImage: "url(/img/slid/freelancer.jpg)" }} */ style: {
            backgroundImage: "url(/img/slid/me_in_cover_1918x1281.png)"
        },
        "data-overlay-dark": "4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "cont",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                children: "Hello, I'm"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Guilherme Oliveira"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Fullstack Web Developer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-medium"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-github"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-linkedin"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const Intro_txt = (IntroTxt);

// EXTERNAL MODULE: ./src/components/Navbar/index.jsx + 1 modules
var Navbar = __webpack_require__(4848);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/data/sections/numbers1.json
const numbers1_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","txt":"Happy Clients","value":"2"},{"id":2,"icon":"pe-7s-portfolio","txt":"Compleate Projects","value":"2"}]');
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Numbers/index.jsx






const Numbers1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "number-sec section-padding sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: numbers1_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `item ${item.id == 1 ? "no-bord" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `icon ${item.icon}`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "custom-font",
                                    children: [
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            redraw: true,
                                            end: item.value,
                                            duration: "3",
                                            children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                                    onChange: start,
                                                    delayedCall: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "count",
                                                                ref: countUpRef
                                                            }),
                                                            " ",
                                                            item.id == 3 ? "K" : ""
                                                        ]
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: item.txt
                                    })
                                })
                            ]
                        })
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const Numbers = (Numbers1);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(8063);
;// CONCATENATED MODULE: ./src/data/sections/portfolio1.json
const portfolio1_namespaceObject = JSON.parse('[{"id":1,"image":"/img/portfolio/bybeet_landing_page/desktop.png","title":"Landing Page","tags":["Bybeet","Landing page","Desktop"],"filterCategory":["web"],"link":"/project-details/project-bybeet-details"},{"id":2,"image":"/img/portfolio/bybeet_landing_page/mobile.png","title":"Landing Page","tags":["Bybeet","Landing page","Mobile"],"filterCategory":["mobile"],"link":"/project-details/project-bybeet-details"},{"id":3,"image":"/img/portfolio/DevJourneyLog_landing_page/desktop.png","title":"Landing Page/Blog","tags":["Dev Journey Log","Landing page","Blog","Desktop","CMS"],"filterCategory":["web"],"link":"/project-details/project-devjourneylog-details"},{"id":4,"image":"/img/portfolio/DevJourneyLog_landing_page/mobile.png","title":"Landing Page/Blog","tags":["Dev Journey Log","Landing page","Blog","Mobile","CMS"],"filterCategory":["mobile"],"link":"/project-details/project-devjourneylog-details"},{"id":5,"image":"/img/portfolio/mas/05.jpg","title":"See It Yourself","tags":["Design","WordPress"],"filterCategory":["web"]},{"id":6,"image":"/img/portfolio/mas/06.jpg","title":"Blast From The Past","tags":["Design","WordPress"],"filterCategory":["brand"]},{"id":7,"image":"/img/portfolio/mas/06.jpg","title":"Blast From The Past","tags":["App","Android"],"filterCategory":["mobile"]}]');
;// CONCATENATED MODULE: ./src/components/Portfolio-custom-column/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const PortfolioCustomColumn = ({ column , filterPosition , hideFilter , hideSectionTitle ,  })=>{
    const [pageLoaded, setPageLoaded] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,initIsotope/* default */.Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "portfolio section-padding pb-70",
        children: [
            !hideSectionTitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sec-head custom-font",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "wow fadeIn",
                            "data-wow-delay": ".5s",
                            children: "Portfolio"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "wow words chars splitting",
                                "data-splitting": true,
                                children: "Our Works."
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${column === 3 ? "container-fluid" : "container"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        !hideFilter && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "filter",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": "*",
                                        className: "active",
                                        children: "All"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".web",
                                        children: "Web App"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".mobile",
                                        children: "Mobile App"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "data-filter": ".creative",
                                        children: "Creative"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "gallery full-width",
                            children: portfolio1_namespaceObject.map((item, index1)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${column === 3 ? "col-lg-4 col-md-6" : column === 2 ? "col-md-6" : "col-12"} items ${item.filterCategory} wow fadeInUp ${item.id === 2 && column == 3 ? "lg-mr" : item.id === 1 && column == 2 ? "lg-mr" : ""}`,
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: item.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "imago wow",
                                                    "data-splitting": true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.image,
                                                            alt: "image"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "item-img-overlay"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: item.tags.map((tag, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/works4/works4-dark",
                                                                    children: tag
                                                                }),
                                                                index == item.tags.length - 1 ? "" : ","
                                                            ]
                                                        }, index * 3)
                                                    )
                                                })
                                            ]
                                        })
                                    ]
                                }, item.id)
                            )
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Portfolio_custom_column = (PortfolioCustomColumn);

// EXTERNAL MODULE: ./src/components/Services4/index.jsx + 1 modules
var Services4 = __webpack_require__(569);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/common/removeOverlay.js
const removeOverlay = ()=>{
    let sectionWithOutOverlay = document.querySelectorAll("section.noOverlay");
    if (sectionWithOutOverlay) {
        sectionWithOutOverlay.forEach((section)=>section.removeAttribute("data-overlay-dark")
        );
    }
};
/* harmony default export */ const common_removeOverlay = (removeOverlay);

;// CONCATENATED MODULE: ./src/common/parallaxie.js
function parallaxie(selector) {
    let elementBg = document.querySelector(selector);
    if (elementBg) {
        let position = elementBg.getBoundingClientRect().top * 0.75;
        elementBg.style.backgroundSize = 'cover';
        elementBg.style.backgroundRepeat = 'no-repeat';
        elementBg.style.backgroundAttachment = 'fixed';
        elementBg.style.backgroundPosition = `center ${position}px`;
        window.addEventListener('scroll', ()=>{
            let element = document.querySelector(selector);
            position = element.getBoundingClientRect().top * 0.75;
            element.style.backgroundPosition = `center ${position}px`;
        });
    }
};

;// CONCATENATED MODULE: ./src/components/Testimonials1/index.jsx

/* eslint-disable @next/next/no-img-element */ 






class Testimonials1 extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "arrows",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickNext()
                    ,
                    className: "next cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-right"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: ()=>this.slider.slickPrev()
                    ,
                    className: "prev cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pe-7s-angle-left"
                    })
                })
            ]
        }));
    };
    componentDidMount() {
        common_removeOverlay();
        parallaxie('.testimonials.bg-img.parallaxie');
    }
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: `testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`,
            style: {
                backgroundImage: `${this.props.withBG && !this.props.imgSrc ? "url(/img/slid/3.jpg)" : this.props.imgSrc ? `url(${this.props.imgSrc})` : "none"}`
            },
            "data-overlay-dark": `${this.props.overlay ? "9" : "0"}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container position-re",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "What Peapole Says?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Testimonials."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center wow fadeInUp",
                        "data-wow-delay": ".5s",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                className: "slic-item",
                                ref: (c)=>this.slider = c
                                ,
                                dots: true,
                                infinite: true,
                                arrows: true,
                                autoplay: true,
                                rows: 1,
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Working with Avo digital agency to support our organic and paid social media activity has extended the marketing activities we are able to achieve platform has made collaboration easy."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Avo started out managing our SEO efforts, but their scientific approach to digital marketing and the results they have achieved made it an easy decision for us to handover the management."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "I would highly recommend Avo Digital. I worked with the team on an animation for our U+2018 Click & Collect U+2019 service. This team is different from any other agency I have worked with in the past."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: this.props.subBgLftstl ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "lxleft",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "img",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/clients/1.jpg",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "fxright",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Alex Regelman"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Co-founder, Colabrio"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "author-name custom-font",
                                                                    children: "Alex Regelman"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "author-details",
                                                                    children: "Co-founder, Colabrio"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    this.renderArrows()
                ]
            })
        }));
    }
}
/* harmony default export */ const components_Testimonials1 = (Testimonials1);

// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(2532);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/components/Contact-section/index.jsx





const ContactSection = ()=>{
    const messageRef = external_react_default().useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "contact-sec section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sec-head custom-font text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "wow fadeIn",
                            "data-wow-delay": ".5s",
                            children: "Get In Touch"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "wow words chars splitting",
                                "data-splitting": true,
                                children: "Contact Us."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form wow fadeInUp",
                            "data-wow-delay": ".5s",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                                initialValues: {
                                    name: "",
                                    email: "",
                                    message: ""
                                },
                                onSubmit: async (values)=>{
                                    await sendMessage(500);
                                    alert(JSON.stringify(values, null, 2));
                                    // show message
                                    const formData = new FormData();
                                    formData.append('name', values.name);
                                    formData.append('email', values.email);
                                    formData.append('message', values.message);
                                    const res = await external_axios_default().post('/contact.php', formData);
                                    if (!res) return;
                                    messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
                                    // Reset the values
                                    values.name = "";
                                    values.email = "";
                                    values.message = "";
                                    // clear message
                                    setTimeout(()=>{
                                        messageRef.current.innerText = "";
                                    }, 2000);
                                },
                                children: ({ errors , touched  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                                        id: "contact-form",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "messages",
                                                ref: messageRef
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "controls",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                    id: "form_name",
                                                                    type: "text",
                                                                    name: "name",
                                                                    placeholder: "Name",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-6",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                        id: "form_email",
                                                                        type: "email",
                                                                        name: "email",
                                                                        validate: validateEmail,
                                                                        placeholder: "Email",
                                                                        required: "required"
                                                                    }),
                                                                    errors.email && touched.email && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        children: errors.email
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "form-group",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                    as: "textarea",
                                                                    id: "form_message",
                                                                    name: "message",
                                                                    placeholder: "Message",
                                                                    rows: "4",
                                                                    required: "required"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    type: "submit",
                                                                    className: "simple-btn custom-font cursor-pointer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Send Message"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                            })
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Contact_section = (ContactSection);

;// CONCATENATED MODULE: ./src/data/sections/clients-brands.json
const clients_brands_namespaceObject = JSON.parse('[{"id":1,"darkImage":"/img/clients/brands/dark/01.png","lightImage":"/img/clients/brands/light/1.png","link":"link para a marca 1","alt":"Texto para a marca 1"},{"id":2,"darkImage":"/img/clients/brands/dark/02.png","lightImage":"/img/clients/brands/light/2.png","link":"https://devjourneylog.com/","alt":"www.devjourney.log"},{"id":3,"darkImage":"/img/clients/brands/dark/03.png","lightImage":"/img/clients/brands/light/3.png","link":"link para a marca 3","alt":"Texto para a marca 3"},{"id":4,"darkImage":"/img/clients/brands/dark/04.png","lightImage":"/img/clients/brands/light/4.png","link":"https://bybeet.com/","alt":"www.bybeet.com"},{"id":5,"darkImage":"/img/clients/brands/dark/05.png","lightImage":"/img/clients/brands/light/5.png","link":"https://bybeet.com/","alt":"www.bybeet.com"},{"id":6,"darkImage":"/img/clients/brands/dark/06.png","lightImage":"/img/clients/brands/light/6.png","link":"https://bybeet.com/","alt":"www.bybeet.com"},{"id":7,"darkImage":"/img/clients/brands/dark/07.png","lightImage":"/img/clients/brands/light/7.png","link":"https://bybeet.com/","alt":"www.bybeet.com"},{"id":8,"darkImage":"/img/clients/brands/dark/08.png","lightImage":"/img/clients/brands/light/8.png","link":"https://bybeet.com/","alt":"www.bybeet.com"}]');
;// CONCATENATED MODULE: ./src/components/Clients-brands/index.jsx

/* eslint-disable @next/next/no-img-element */ 





const ClientsBrands = ({ subBG , theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients-brand section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                className: "",
                "data-wow-delay": ".5s",
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                slidesToScroll: 1,
                slidesToShow: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }, 
                ],
                children: clients_brands_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "brands",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    display: "none"
                                },
                                children: " \xa0 "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item",
                                "data-wow-delay": index + 1 == "1" ? ".3s" : index + 1 == "2" ? ".6s" : index + 1 == "3" ? ".8s" : index + 1 == "4" ? ".3s" : index + 1 == "5" ? ".4s" : index + 1 == "6" ? ".7s" : index + 1 == "7" ? ".5s" : index + 1 == "8" ? ".3s" : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: theme == "dark" ? item.darkImage : item.lightImage,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: item.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "link words chars splitting",
                                            "data-splitting": true,
                                            children: item.alt
                                        })
                                    })
                                ]
                            })
                        ]
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const Clients_brands = (ClientsBrands);

;// CONCATENATED MODULE: ./src/pages/home/index.jsx













const Homepage = ()=>{
    const navbarRef = external_react_default().useRef(null);
    const logoRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Intro_txt, {
                subBG: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About_with_skills, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Services4/* default */.Z, {
                halfBG: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Numbers, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Portfolio_custom_column, {
                column: 2,
                filterPosition: "left"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Testimonials1, {
                subBgLftstl: true,
                parallaxie: true,
                withBG: true,
                overlay: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Clients_brands, {
                subBG: true,
                theme: "dark"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact_section, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
            })
        ]
    }));
};
/* harmony default export */ const home = (Homepage);


/***/ })

};
;