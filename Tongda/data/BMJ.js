EDSFormats['BMJ (JB)'] = {
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

EDSData['BMJ (JB)'] = {
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
                }, 
                {
                    renderType: "destScroll",
                    serviceNumber: "WIP",
                    top: "COMING SOON",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    103: {
        front: {
            renderType: "standardService",
            serviceNumber: "P103",
            destination: "",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P103",
                    top: "PPR STULANG",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    201: {
        front: {
            renderType: "standardService",
            serviceNumber: "P201",
            destination: "",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P201",
                    top: "TERM. TAMAN U",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P201",
                    top: "PULAI INDAH",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    998: {
        front: {
            renderType: "standardService",
            serviceNumber: "HSA",
            destination: "",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "HSA",
                    topFont: "Tongda-16:7",
                },

            ]
        }
    },
    999: {
        front: {
            renderType: "standardService",
            serviceNumber: "HSI",
            destination: "",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "HOSP. SULTAN ISMAIL",
                    topFont: "Tongda-16:7",
                },

            ]
        }
    },
}

EDSExtras['BMJ (JB)'] = {
}

EDSImages['BMJ (JB)'] = {
"blank": [
    [0]
]
}
