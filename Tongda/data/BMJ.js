EDSFormats['BMJ (JB)'] = {
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

        text: "$serviceNumber+' '+$destination"
        
    },
    destScroll: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 0,
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

EDSData['BMJ (JB)'] = {
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "Welcome",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "BMJ - JB",
                    top: "Tekan butang F1",
                    topFont: "Hanover-7:4",
                    bottom: "untuk memilih laluan",
                    bottomFont: "Hanover-7:4",
                }, 
                {
                    renderType: "destScroll",
                    serviceNumber: "BMJ - JB",
                    top: "Press the F1 button",
                    topFont: "Hanover-7:4",
                    bottom: "to select service",
                    bottomFont: "Hanover-7:4",
                }, 
            ]
        }
    },
    "1PE": {
        front: {
            renderType: "standardService",
            serviceNumber: "PE001",
            destination: "BANDAR PENAWAR / DESARU COAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "PE001",
                    top: "BDR PENAWAR",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "PE001",
                    top: "DESARU COAST",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "2PE": {
        front: {
            renderType: "standardService",
            serviceNumber: "PE002",
            destination: "TAMAN BAYU DAMAI / TERM. SUNGAI RENGGIT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "PE002",
                    top: "TMN BAYU DAMAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "PE002",
                    top: "T. SG. RENGGIT",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "4PE": {
        front: {
            renderType: "standardService",
            serviceNumber: "PE004",
            destination: "BANDAR PENAWAR / KOTA TINGGI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "PE004",
                    top: "BDR PENAWAR",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "PE004",
                    top: "T. KOTA TINGGI",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "5PE": {
        front: {
            renderType: "standardService",
            serviceNumber: "PE005",
            destination: "BANDAR PENAWAR / TAMAN BAYU DAMAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "PE005",
                    top: "BDR PENAWAR",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "PE005",
                    top: "TMN BAYU DAMAI",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    101: {
        front: {
            renderType: "standardService",
            serviceNumber: "P101",
            destination: "JB SENTRAL / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P101",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P101",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    102: {
        front: {
            renderType: "standardService",
            serviceNumber: "P102",
            destination: "PPR STULANG / JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P102",
                    top: "PPR STULANG",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P102",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    103: {
        front: {
            renderType: "standardService",
            serviceNumber: "P103",
            destination: "PPR STULANG / LARKIN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P103",
                    top: "PPR STULANG",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P103",
                    top: "LARKIN",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    201: {
        front: {
            renderType: "standardService",
            serviceNumber: "P201",
            destination: "TAMAN U / PULAI INDAH",
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
    202: {
        front: {
            renderType: "standardService",
            serviceNumber: "P202",
            destination: "TERMINAL TAMAN U / TUTA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P202",
                    top: "TERM. TAMAN U",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P202",
                    top: "TUTA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    203: {
        front: {
            renderType: "standardService",
            serviceNumber: "P203",
            destination: "SELESA JAYA / KIPMART SKUDAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P203",
                    top: "SELESA JAYA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P203",
                    top: "KIPMART SKUDAI",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    211: {
        front: {
            renderType: "standardService",
            serviceNumber: "P211",
            destination: "TAMAN U / LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P211",
                    top: "TERM. TAMAN U",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P211",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    212: {
        front: {
            renderType: "standardService",
            serviceNumber: "P212",
            destination: "SELESA JAYA / G NUSA BESTARI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P212",
                    top: "SELESA JAYA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P212",
                    top: "G NUSA BESTARI",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    213: {
        front: {
            renderType: "standardService",
            serviceNumber: "P213",
            destination: "TAMAN U / GP TERMINAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P213",
                    top: "TERM. TAMAN U",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P213",
                    top: "GP TERMINAL",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    214: {
        front: {
            renderType: "standardService",
            serviceNumber: "P214",
            destination: "TAMAN U / SETIA TROPIKA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P214",
                    top: "TERM. TAMAN U",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P214",
                    top: "SETIA TROPIKA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    401: {
        front: {
            renderType: "standardService",
            serviceNumber: "P401",
            destination: "TERMINAL KULAI / BANDAR PUTRA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P401",
                    top: "TERMINAL KULAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P401",
                    top: "BANDAR PUTRA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    411: {
        front: {
            renderType: "standardService",
            serviceNumber: "P411",
            destination: "TERMINAL KULAI / TERMINAL LARKIN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P411",
                    top: "TERMINAL KULAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P411",
                    top: "TERMINAL LARKIN",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    412: {
        front: {
            renderType: "standardService",
            serviceNumber: "P412",
            destination: "TERMINAL KULAI / TAMAN SCIENTEX",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "P412",
                    top: "TERMINAL KULAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "P412",
                    top: "TAMAN SCIENTEX",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    998: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "HSA - Larkin",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Shuttle HSA - LARKIN",
                    topFont: "Mobitec-7:7",
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
