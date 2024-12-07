EDSFormats['CWL (JB Area)'] = {
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

EDSData['CWL (JB Area)'] = {
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "CW1",
            destination: "KRANJI MRT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CW1",
                    top: "KRANJI MRT",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "CW1",
            destination: "KRANJI MRT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CW1",
                    top: "KRANJI MRT",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    2: {
        front: {
            renderType: "standardService",
            serviceNumber: "CW2",
            destination: "QUEEN STREET / JB CIQ",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CW2",
                    top: "QUEEN STREET T.",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    3: {
        front: {
            renderType: "standardService",
            serviceNumber: "CW3",
            destination: "JURONG EAST / PERLING MALL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CW3",
                    top: "JURONG EAST",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "CW3",
                    top: "PERLING MALL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "3L": {
        front: {
            renderType: "standardService",
            serviceNumber: "CW3L",
            destination: "JURONG EAST / PERLING MALL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CW3L",
                    top: "JURONG EAST",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "CW3L",
                    top: "PERLING MALL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    5: {
        front: {
            renderType: "standardService",
            serviceNumber: "CW5",
            destination: "NEWTON / JB CIQ",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CW5",
                    top: "NEWTON",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "CW5",
                    top: "JB CUSTOM",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "1AA": {
        front: {
            renderType: "standardService",
            serviceNumber: "AA1",
            destination: "JB SENTRAL / SENAI AIRPORT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "AA1",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "AA1",
                    top: "SENAI AIRPORT",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "1CG": {
        front: {
            renderType: "standardService",
            serviceNumber: "CG1",
            destination: "COUNTRY GARDEN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CG1",
                    top: "COUNTRY GARDEN",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "1CT": {
        front: {
            renderType: "standardService",
            serviceNumber: "CT",
            destination: "JB SENTRAL/ BAYU PUTERI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "CT",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "CT",
                    top: "BAYU PUTERI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "1DS": {
        front: {
            renderType: "standardService",
            serviceNumber: "DS1",
            destination: "ANANTARA / O&O",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "DS1",
                    top: "ANANTARA / O&O",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "1FC": {
        front: {
            renderType: "standardService",
            serviceNumber: "FC1",
            destination: "FOREST CITY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "FC1",
                    top: "FOREST CITY",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "1LP": {
        front: {
            renderType: "standardService",
            serviceNumber: "LOOP 1",
            destination: "WOODLANDS CIQ",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "LOOP1",
                    top: "WOODLAND CIQ",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "2DS": {
        front: {
            renderType: "standardService",
            serviceNumber: "DS2",
            destination: "WESTIN / HARD ROCK HOTEL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "DS2",
                    top: "WESTIN / HRH",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    9998: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Mask",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "PAKAI PELITUP MUKA",
                    topFont: "Mobitec-7:4",
                    bottom: "KERAP SANITASI TANGAH ANDA",
                    bottomFont: "Mobitec-7:4", 
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "MASK IS MANDATORY",
                    topFont: "Mobitec-7:4",
                    bottom: "SANITIZE YOUR HAND REGULARLY",
                    bottomFont: "Mobitec-7:4", 
                },
            ]
        }
    },
    9999: {
        front: {
            renderType: "standardService",
            serviceNumber: "WIP",
            destination: "Akan Datang",
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
                },
            ]
        }
    },
}

EDSExtras['CWL (JB Area)'] = {
}

EDSImages['CWL (JB Area)'] = {
"blank": [
    [0]
]
}
