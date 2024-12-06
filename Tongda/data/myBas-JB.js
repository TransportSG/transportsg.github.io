EDSFormats['myBas JB'] = {
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

EDSData['myBas JB'] = {
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "WIP",
            destination: "akan datang",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "WIP",
                    top: "AKAN DATANG",
                    topFont: "Tongda-16:7",
                }, {
                    renderType: "destScroll",
                    serviceNumber: "WIP",
                    top: "COMING SOON",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    10: {
        front: {
            renderType: "standardService",
            serviceNumber: "T10",
            destination: "JB SENTRAL / KOTA TINGGI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T10",
                    top: "JB SEN./LARKIN",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T10",
                    top: "T. KOTA TINGGI",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    20: {
        front: {
            renderType: "standardService",
            serviceNumber: "T20",
            destination: "JB SENTRAL / PASIR GUDANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T20",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T20",
                    top: "T. PASIR GUDANG",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    21: {
        front: {
            renderType: "standardService",
            serviceNumber: "T21",
            destination: "JB SENTRAL / PERMAS JAYA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T21",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T21",
                    top: "PERMAS JAYA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "T22",
            destination: "LARKIN SENTRAL / KOTA MASAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T22",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T22",
                    top: " LOTUS KOTA MASAI",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    33: {
        front: {
            renderType: "standardService",
            serviceNumber: "T33",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T33",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T33",
                    top: "TAN SRI YAACOB",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    50: {
        front: {
            renderType: "standardService",
            serviceNumber: "T50",
            destination: "LARKIN SENTRAL / PONTIAN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T50",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T50",
                    top: "PONTIAN",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    100: {
        front: {
            renderType: "standardService",
            serviceNumber: "F100",
            destination: "JB SENTRAL / KSL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F100",
                    top: "KSL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "F100",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
}

EDSExtras['myBas JB'] = {
}

EDSImages['myBas JB'] = {
"blank": [
    [0]
]
}
