EDSFormats.LTVBL = {
    scroll: {
        scroll: {
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 5000,

            font: "Buse-16:8",
            spacing: 1
        },

        text: "$preview"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Buse-16:8",
            spacing: {
                $$cond: {
                    "$spacing === null" : 1,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: {
                $$cond: {
                    "$topSpacing == null": "1",
                    "else": "$topSpacing"
                }
            },
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Buse-7:5"
                }
            },
            spacing: {
                $$cond: {
                    "$bottomSpacing == null": "1",
                    "else": "$bottomSpacing"
                }
            },
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$serviceNumber+' '$top+' '+$bottom"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.LTVBL = {
    10: {
        front: {
            renderType: "destScroll",
            serviceNumber: "1",
            top: "MOE",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "MORWELL", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
        }
    }
}

EDSExtras.LTVBL = {};

EDSImages.LTVBL = {};
