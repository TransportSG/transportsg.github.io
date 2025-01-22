EDSFormats['myBas JB'] = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
                left: 0
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
                left: 'width(serviceNumber)'
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
            serviceNumber: "",
            destination: "Welcome",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "MYBAS JB",
                    top: "Tekan butang F1",
                    topFont: "Hanover-7:3",
                    bottom: "untuk memilih laluan",
                    bottomFont: "Hanover-7:3",
                }, 
                {
                    renderType: "destScroll",
                    serviceNumber: "MYBAS JB",
                    top: "Press the F1 button",
                    topFont: "Hanover-7:3",
                    bottom: "to select service",
                    bottomFont: "Hanover-7:3",
                }, 
            ]
        }
    },
    10: {
        front: {
            renderType: "standardService",
            serviceNumber: "T10",
            destination: "T10 KOTA TINGGI / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T10",
                    top: "T. KOTA TINGGI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T10",
                    top: "JB SEN./LARKIN",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    11: {
        front: {
            renderType: "standardService",
            serviceNumber: "T11",
            destination: "T11 SERI AUSTIN / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T11",
                    top: "SERI AUSTIN",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T11",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    12: {
        front: {
            renderType: "standardService",
            serviceNumber: "T12",
            destination: "T12 AEON TEBRAU / TERMINAL TIRAM",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T12",
                    top: " AEON BUKIT INDAH",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T12",
                    top: "TERMINAL TIRAM",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    13: {
        front: {
            renderType: "standardService",
            serviceNumber: "T13",
            destination: "T13 JB SENTRAL / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T13",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T13",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    14: {
        front: {
            renderType: "standardService",
            serviceNumber: "T14",
            destination: "T14 TOPPEN & IKEA / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T14",
                    top: "TOPPEN & IKEA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T14",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    20: {
        front: {
            renderType: "standardService",
            serviceNumber: "T20",
            destination: "T20 PASIR GUDANG / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T20",
                    top: "T. PASIR GUDANG",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T20",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    21: {
        front: {
            renderType: "standardService",
            serviceNumber: "T21",
            destination: "T21 PERMAS JAYA / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T21",
                    top: "PERMAS JAYA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T21",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "T22",
            destination: "T22 LOTUS KOTA MASAI / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T22",
                    top: "LOTUS KOTA MASAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T22",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    30: {
        front: {
            renderType: "standardService",
            serviceNumber: "T30",
            destination: "T30 KULAI / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T30",
                    top: "TERMINAL KULAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T30",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    31: {
        front: {
            renderType: "standardService",
            serviceNumber: "T31",
            destination: "T31 PULAI MUTIARA / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T31",
                    top: "PULAI MUTIARA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T31",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    32: {
        front: {
            renderType: "standardService",
            serviceNumber: "T32",
            destination: "T32 FLAT SELESA JAYA / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T32",
                    top: "SELESA JAYA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T32",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    33: {
        front: {
            renderType: "standardService",
            serviceNumber: "T33",
            destination: "T33 TAN SRI YAACOB / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T33",
                    top: "TAN SRI YAACOB",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T33",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    40: {
        front: {
            renderType: "standardService",
            serviceNumber: "T40",
            destination: "T40 GP SENTRAL / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T40",
                    top: "GP SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T40",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    41: {
        front: {
            renderType: "standardService",
            serviceNumber: "T41",
            destination: "PUTERI HARBOUR FERRY / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T41",
                    top: "P. HARB FERRY",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T41",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },

            ]
        }
    },
    42: {
        front: {
            renderType: "standardService",
            serviceNumber: "T42",
            destination: "PENDAS / GELANG PATAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T42",
                    top: "PENDAS",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T42",
                    top: "GELANG PATAH",
                    topFont: "Tongda-16:7",
                },

            ]
        }
    },
    43: {
        front: {
            renderType: "standardService",
            serviceNumber: "T43",
            destination: "T43 AEON BUKIT INDAH / PUTERI HARBOUR",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T43",
                    top: "AEON BUKIT INDAH",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T43",
                    top: "PUTERI HARBOUR",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    44: {
        front: {
            renderType: "standardService",
            serviceNumber: "T44",
            destination: "T44 PUTERI HARBOUR / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T44",
                    top: "PUTERI HARBOUR",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T44",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    50: {
        front: {
            renderType: "standardService",
            serviceNumber: "T50",
            destination: "T50 PONTIAN / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T50",
                    top: "PONTIAN",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T50",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
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
    200: {
        front: {
            renderType: "standardService",
            serviceNumber: "F200",
            destination: "F200 PTR SERI ALAM / TERMINAL MASAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F200",
                    top: "PTR SERI ALAM",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "F200",
                    top: "TERMINAL MASAI",
                    topFont: "Tongda-16:7",
                },

            ]
        }
    },
    201: {
        front: {
            renderType: "standardService",
            serviceNumber: "F201",
            destination: "F201 TAMAN RINTING / TERMINAL MASAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F201",
                    top: "TAMAN RINTING",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "F201",
                    top: "TERMINAL MASAI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    300: {
        front: {
            renderType: "standardService",
            serviceNumber: "F300",
            destination: "F300 TAMAN PUTERI KULAI / TERMINAL KULAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F300",
                    top: "TMN PTR KULAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "F300",
                    top: "TERMINAL KULAI",
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
