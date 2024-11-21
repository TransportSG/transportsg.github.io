EDSFormats.BMJ = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: {
                $$cond: {
                    "$destFont === null": "Mobitec-7:4",
                    "else": "$destFont"
                }
            },
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
        
    },
    destScroll: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 1
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 1
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Tongda-16:7",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
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
                    "$bottomFont === null": "Mobitec-7:4",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "right",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
        
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
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

EDSData.BMJ = {
    1: {
        front: {
            renderType: "full"
        }
    },
    2: {
        front: {
            renderType: "message",
            text: "TONGDA",
            font: "Tongda-16:7",
            spacing: 2,
        }
    },
    1111: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Tiada Perkhidmatan",
            scrolls: [
                {
                    renderType: "message",
                    text: "TIADA PERKHIDMATAN",
                    font: "Tongda-16:7",
                    spacing: 1
                }
            ]
        }
    },
    1001: {
        front: {
            renderType: "standardService",
            serviceNumber: "F100",
            destination: "Bandaraya",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F100",
                    top: "LARKIN",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    1002: {
        front: {
            renderType: "standardService",
            serviceNumber: "F100",
            destination: "JB Sentral",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F100",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    72: {
        front: {
            renderType: "standardService",
            serviceNumber: "7",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ULU PANDAN RD",
                "HOLLAND RD",
                "ORCHARD RD",
                "VICTORIA ST",
                "GUILLEMARD RD",
                "SIMS AVE EAST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    }
}

EDSExtras.BMJ = {
}

EDSImages.BMJ = {
"blank": [
    [0]
]
}
