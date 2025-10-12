EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                top: 2
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "Arial-17",
                    "else": "$serviceFont"
                }
            },
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)',
                bottom: 1
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    logoSvc: {
        logo: {
            align: "centre-y,centre-x",
            image: "$image",
            margin: {
                bottom: "-3"
            },
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "$serviceFont",
            spacing: "$serviceSpacing",
            margin: {
                top: 2
            },
        },

        text: "$destination"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                top: 2
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont !== null": "$serviceFont",
                    "else": "Arial-17"
                }
            },
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
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
                    "$topSpacing === null" : 1,
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: 1
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    destScroll2: {
        serviceNumber: {
            align: "right",
            margin: {
                top: 2,
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont !== null": "$serviceFont",
                    "else": "Calibri-15"
                }
            },
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
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
            spacing: 1,
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: 1
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    destScroll2A: {
        serviceNumber: {
            align: "right",
            margin: {
                top: 2,
            },
            text: "$serviceNumber",
            font: "Calibri-15",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
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
            spacing: 1,
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    destScroll2B: {
        serviceNumber: {
            align: "right",
            margin: {
                top: 2,
            },
            text: "$serviceNumber",
            font: "Calibri-15",
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
            spacing: 1,
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: "1"
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    ScrollWithSpecialCharacters: {
        serviceNumber: {
            align: "right",
            margin: {
                top: 2,
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "Arial-17",
                    "else": "$serviceFont"
                }
            },
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
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
            spacing: 1,
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: "0"
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    ScrollWithSpecialCharacters2: {
        serviceNumber: {
            align: "right",
            margin: {
                top: 2,
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "Arial-17",
                    "else": "$serviceFont"
                }
            },
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
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
            spacing: 1,
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: "1"
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    destScroll3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "Calibri-15",
            spacing: 3
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
                    "$topFont === null": "ArialBold-8:2",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 0
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
                    "$bottomFont === null": "ArialBold-8:2",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                bottom: 1
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    message: {
        display: {
            align: "centre-x,top",
            margin: {
                top: {
                    $$cond: {
                        "$marginTop === undefined": 1,
                        "else": "$marginTop"
                    }
                },
                left: {
                    $$cond: {
                        "$marginLeft === undefined": 0,
                        "else": "$marginLeft"
                    }
                }
            },
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 1
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: {
                    $$cond: {
                        "$bottomMargin === undefined": 1,
                        "else": "$bottomMargin"
                    }
                }
            }
        },
        text: "$top"
    },
    testFontMix: {
        display: {
            align: "centre-x,bottom",
            text: "$text",
            spacing: "$spacing"
        }
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
    },
    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    }
}

EDSFormats.SMRT.scammer = EDSFormats.SBST.standardService;

EDSFormats.SMRT.calibriStandardService = JSON.parse(JSON.stringify(EDSFormats.SMRT.standardService));
EDSFormats.SMRT.calibriStandardService.serviceNumber.font = 'Calibri-17';

EDSFormats.SMRT.calibriSmallService = JSON.parse(JSON.stringify(EDSFormats.SMRT.standardService));
EDSFormats.SMRT.calibriSmallService.serviceNumber.font = 'Calibri-15'; // TODO: make font

EDSData.SMRT = {
    1: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'CHARTERED',
                font: 'Calibri-10',
                spacing: 2,
                marginTop: 5
            },
            rear: { 
                renderType: 'twoline',
                top: "",
                topFont: "ArialBold-8",

                bottom: "",
                bottomFont: "Arial-7",
            }
        }
    },
    2: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'SOON LEE DEPOT',
                font: 'Calibri-11:1',
                spacing: 1,
                marginTop: 4
            },
            rear: { 
                renderType: 'twoline',
                top: "SL",
                topFont: "ArialBold-8",

                bottom: "DEPOT",
                bottomFont: "Arial-7",
            }
        }
    },
    4: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'SMRT BUSES',
                font: 'Arial-17',
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "SMRT",
                topFont: "Calibri-7:2",
    
                bottom: "BUSES",
                bottomFont: "Calibri-7:2",
            }
        }
    },
    5: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'Arial-17',
                spacing: 2
            },
            rear: { 
                renderType: 'twoline',
                top: "OFF",
                topFont: "ArialBold-8",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7",
                bottomMargin: 2
            }
        }
    },
    7: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'OUT OF SERVICE',
                font: 'Arial-12',
                spacing: 1,
                marginTop: 4
            },
            rear: { 
                renderType: 'twoline',
                top: "OUT OF",
                topFont: "LECIP-6:4",

                bottom: "SERVICE",
                bottomFont: "LECIP-6:4",
                bottomMargin: 1
            }
        }
    },
    10: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'FERRY SERVICE',
                font: 'Arial-12:2',
                spacing: 1,
                marginTop: 4
            },
            rear: { 
                renderType: 'twoline',
                top: "FERRY",
                topFont: "LECIP-6:4",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7",
                bottomMargin: 1
            }
        }
    },
    12: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        }
    },
    13: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'TRAINING  BUS',
                font: "Arial-12:2",
                spacing: 1,
                marginTop: 4
            },
            rear: { 
                renderType: 'twoline',
                top: "TRG",
                topFont: "ArialBold-8",

                bottom: "BUS",
                bottomFont: "ArialBold-8",
                bottomMargin: 1
            }
        }
    },
    18: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "LRT SHUTTLE A",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'LRT SHUtLE A',
                        font: 'Arial-13:1',
                        spacing: 2,
                        marginTop: 3
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "LRA",
                font: "Arial-10:2",
                spacing: 1
            }
        }
    },
    19: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "LRT SHUTTLE B",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'LRT SHUTTLE B',
                        font: 'Arial-13:1',
                        spacing: 2,
                        marginTop: 3
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "LR B",
                font: "Arial-10:2",
                spacing: 1
            }
        }
    },
    "50C": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CHINGAY 50 LOGO",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "logo",
                        text: "CHINGAY 50",
                        image: "Chingay50-TextOnly"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SMRT LOGO",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "logo",
                        text: "CG50",
                        image: "Chingay50-firework"
                    },
                    { 
                        renderType: 'twoline',
                        top: "CHINGAY",
                        topFont: "LECIP-6:4",

                        bottom: "50",
                        bottomFont: "Arial-8:2:2",
                        bottomMargin: 1
                    }
                ],
                scrollFont: "ArialBold-8:2"
            }
        }
    },
    113: {
        1: {
            front: {
                renderType: 'message',
                text: 'AIRSHOW SHUTTLE',
                font: 'Arial-12:2',
                spacing: 1,
                marginTop: 4
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WELCOME",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "AIR",
                    topFont: "ArialBold-8",
                    bottom: "SHOW",
                    bottomFont: "Arial-7",
        
                    serviceNumber: ""
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
        }
    },
    117: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SMRT LOGO",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "logo",
                        text: "SMRT LOGO",
                        image: "logo"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WELCOME",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "logo",
                    text: "SMRT LOGO",
                    image: "roundel"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
        }
    },
    199: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'ON TEST',
                font: 'Arial-17',
                spacing: 2
            },
            rear: { 
                renderType: 'twoline',
                top: "ON",
                topFont: "ArialBold-8",

                bottom: "TEST",
                bottomFont: "ArialBold-8",
                bottomMargin: 1
            }
        }
    },
    1101: { // Done / Refer from mobitec
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: "CHANGI AIRPORT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHANGI",
                    topFont: "ArialBold-8:2",
                    bottom: "AIRPORT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "110"
                },
                    'COMPASSVALE DR',
                    'ANCHORVALE DR',
                    'ANCHORVALE RD',
                    'ANCHORVALE ST',
                    'TPE',
                    'AIRPORT BOULEVARD',
                    'PTB 3, 1, 2, 4'
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1102: { // Done / Refer from mobitec
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: "BUANGKOK INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUANGKOK",
                    topFont: "ArialBold-8:2",
                    bottom: "INTERCHANGE",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "110"
                },
                    'PTB 3, 1, 2, 4',
                    "AIRPORT BOULEVARD",
                    "TPE",
                    "ANCHORVALE ST",
                    "ANCHORVALE RD",
                    "ANCHORVALE DR",
                    "COMPASSVALE DR"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1108: { // Done / Refer from mobitec
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: "CHANGI AIRPORT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHANGI",
                    topFont: "ArialBold-8:2",
                    bottom: "AIRPORT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "110"
                },
                    'COMPASSVALE DR',
                    'ANCHORVALE DR',
                    'ANCHORVALE RD',
                    'ANCHORVALE ST',
                    'TPE',
                    'AIRPORT BOULEVARD',
                    'PTB 3, 1, 2, 4'
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1109: { // Done / Refer from mobitec
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: "COMPASSVALE INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "COMPASSVALE",
                    topFont: "ArialBold-8:2",
                    bottom: "INTERCHANGE",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "110"
                },
                    'PTB 3, 1, 2, 4',
                    "AIRPORT BLVD",
                    "TPE",
                    "ANCHORVALE ST, DR",
                    "COMPASSVALE DR"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1111: { // Done
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 3,
                marginTop: 0,
            },
            rear: {
                renderType: 'twoline',
                top: "OFF",
                topFont: "LECIP-7:4",

                bottom: "SERVICE",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    1721: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "172",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "172"
                },
                    "C. C. K DRIVE",
                    "C. C. K AVE 1, 3",
                    "BRICKLAND RD",
                    "C. C. K. RD",
                    'JLN BAHAR',
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "172",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1722: { // Done / Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "172",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "172"
                },
                    'JLN BAHAR',
                    "C. C. K. RD",
                    "BRICKLAND RD",
                    "C. C. K AVE 3, 1",
                    "C. C. K DRIVE",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "172",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1761: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "176",
                destination: "BUKIT MERAH via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Arial-12:2",
        
                    serviceNumber: "176"
                },
                    "UPP BUKIT TIMAH RD",
                    "HILLVIEW AVENUE",
                    "BT BATOK CTR / MRT",
                    "JURONG TOWN HALL",
                    "TELOK BLANGAH RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "176",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1762: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "176",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / LRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "176"
                },
                    "TELOK BLANGAH RD",
                    "W. COAST HIGHWAY",
                    "JURONG TOWN HALL",
                    "BT BATOK CTR / MRT",
                    "HILLVIEW AVENUE",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "176",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1781: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "178",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "178"
                },
                    "WOODLANDS CTR RD",
                    "UPP BT TIMAH",
                    "BUKIT BATOK",
                    "JUR TOWN HALL",
                    "CORPORATION RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "178",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1782: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "178",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "178"
                },
                    "CORPORATION RD",
                    "JUR TOWN HALL",
                    "BUKIT BATOK",
                    "UPP BT TIMAH",
                    "WDL TRAIN CHKPT",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "178",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1783: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "178A",
                destination: "KRANJI MRT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8",
                    bottom: "KRANJI MRT",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "178A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "178A",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    1791: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NTH",
                    "LIEN YING CHOW DR",
                    "NANYANG DR"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1792: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179A",
                destination: "BOON LAY",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "ScrollWithSpecialCharacters",
                    serviceFont: "Calibri-15",
                    top: "BOON LAY INT",
                    topFont: "ArialBold-8:2",
                    bottom: "NTU (LOOP)",
                    bottomFont: "Calibri-7:2",
        
                    serviceNumber: "179A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    1793: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179B",
                destination: "PIONEER MRT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "ScrollWithSpecialCharacters",
                    serviceFont: "Calibri-15",
                    top: "N T U -",
                    topFont: "ArialBold-8:2",
                    bottom: "PIONEER MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "179B"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179B",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    1801: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "180",
                destination: "BUKIT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "180"
                },
                    "BOON LAY WAY",
                    "JUR TOWN HALL",
                    "BT BATOK RD",
                    "C.C.K ROAD",
                    "PETIR ROAD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "180",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1802: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "180",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "180"
                },
                    "BT BATOK RD",
                    "JUR TOWN HALL",
                    "BOON LAY WAY",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "180",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1803: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "180A",
                destination: "BT PANJANG RD",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8",
                    bottom: "BT PANJANG RD",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "180A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "180A",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    1811: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 3",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "181",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1812: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181M",
                serviceFont: "Calibri-15",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 3",
                    "JURONG WEST ST 23"
                ],
                scrollFont: "Calibri-7:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "181M",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    1821: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: "TUAS STH AVE 4 via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "UPP JURONG RD",
                    "JLN AHMAD IBRAHIM",
                    "TUAS CHECKPOINT",
                    "TUAS WEST DR",
                    "TUAS STH AVE 3, 9",
                    "TUAS STH AVE 8, 5"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1822: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "TUAS STH AVE 3",
                    "TUAS WEST DR",
                    "TUAS CHECKPOINT",
                    "JLN AHMAD IBRAHIM",
                    "UPP JURONG RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1823: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182M",
                destination: "TUAS STH AVE 4 via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2B",
                    top: "TUAS STH AVE 4 via",
                    topFont: "ArialBold-8:2",
                    bottom: "UPP JURONG RD",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS STH AVE 4 via",
                    topFont: "ArialBold-8:2",
                    bottom: "JLN AHMAD IBRAHIM",
                    bottomFont: "Calibri-7:2",
            
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS STH AVE 4 via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS WEST DR",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS STH AVE 4 via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS STH AVE 3, 9",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS STH AVE 4 via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS STH AVE 8, 5",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "182M"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    1824: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182M",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2B",
                    top: "JOO KOON INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS STH AVE 3",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "JOO KOON INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS WEST DR",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "JOO KOON INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS CHECKPOINT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "JOO KOON INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "JLN AHMAD IBRAHIM",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "182M"
                },
                {
                    renderType: "destScroll2B",
                    top: "JOO KOON INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "UPP JURONG RD",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "182M"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    1825: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182A",
                destination: "TUAS SOUTH AVE 3",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS AT",
                    topFont: "ArialBold-8:2",
                    bottom: "BEF TUAS STH AVE 4",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "182A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    1841: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: "CLEMENTI via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "ArialBold-8:2",
                    bottom: "MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "184"
                },
                    "BT PANJANG",
                    "CASHEW RD",
                    "UPP BT TIMAH",
                    "JLN ANAK BUKIT",
                    "CLEMENTI RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1842: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "184"
                },
                    "CLEMENTI RD",
                    "UPP BT TIMAH",
                    "CASHEW RD",
                    "BT PANJANG",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1851: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: "BUONA VISTA TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "PIONEER RD NTH",
                    "JURONG WEST AVE 3",
                    "JURONG WEST ST 23",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                    "CLEMENTI AVE 6",
                    "C'WEALTH AVE WEST",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "185",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1852: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: "SOON LEE DEPOT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "C'WEALTH AVE WEST",
                    "CLEMENTI AVE 6",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "JURONG WEST ST 23" ,
                    "JURONG WEST AVE 3",
                    "PIONEER RD NTH",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "185",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1871: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "187"
                },
                    "WOODLANDS AVE 3",
                    "BT PANJANG RD",
                    "BUKIT BATOK CTR",
                    "JURONG EAST",
                    "BOON LAY WAY",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "187",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1872: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "187"
                },
                    "BOON LAY WAY",
                    "JURONG EAST",
                    "BUKIT BATOK CTR",
                    "BT PANJANG RD",
                    "WOODLANDS AVE 3",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "187",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1881: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "188",
                destination: "HARBOURFRONT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "Arial-10",
        
                    serviceNumber: "188"
                },
                    "C. C. K WAY",
                    "B. B WEST AVE 4, 2",
                    "TOH GUAN RD",
                    "AYE, CLEMENTI",
                    "PASIR PANJANG"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "188",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1882: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "188",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "188"
                },
                    'TELOK BLANGAH RD',
                    'PASIR PANJANG',
                    "CLEMENTI",
                    "TOH GUAN RD",
                    "B.B WEST AVE 6, 3"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "188",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1883: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "188e",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'CHOA CHU KANG WAY',
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BT BATOK WEST AVE 7",
                    bottomFont: "Calibri-7:2",
            
                    serviceNumber: "188e"
                },
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BT BATOK WEST AVE 4",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "188e"
                },
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BT BATOK WEST AVE 2",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "188e"
                },
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BT BATOK WEST AVE 3",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "188e"
                },
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BT BATOK WEST AVE 6",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "188e"
                },
                    "TOH GUAN RD",
                    "CLEMENTI RD",
                    "PASIR PANJANG RD"
                ],
                scrollFont: "Arial-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "188e",
                font: "Arial-10",
                spacing: 2
            }
        },
    },
    1901: { // Not Done / double check
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: "KG. BAHRU TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "KAMPONG BAHRU",
                    topFont: "ArialBold-8:2",
                    bottom: "TERMINAL",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "190"
                },
                    'BT PANJANG RD',
                    'STEVEN ROAD',
                    'ORCHARD ROAD',
                    'HILL STREET',
                    'CHINATOWN'
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1902: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "190"
                },
                    "HILL STREET",
                    "SOMERSET RD",
                    "SCOTTS RD",
                    "STEVEN RD",
                    'BT PANJANG RD',
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1903: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190A",
                destination: "DHOBY GHAUT MRT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT DHOBY",
                    topFont: "Arial-8",
                    bottom: "GHAUT MRT",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "190A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190A",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    1921: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "TUAS TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 62",
                    "UPP JURONG RD",
                    "TUAS AVE 3, 1, 12",
                    "TUAS WEST DR"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "192",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1922: { // Done / Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "TUAS WEST DR",
                    "TUAS AVE 12, 1, 3",
                    "UPPER JURONG RD",
                    "JURONG WEST ST 62",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "192",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1931: { // Done / Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "TUAS TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST AVE 4",
                    "PIONEER RD NTH",
                    "LOK YANG WAY",
                    "SIXTH LOK YANG RD",
                    "TUAS AVE 5, 2, 4, 9",
                    "TUAS WEST DR",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "193",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1932: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "TUAS WEST DR",
                    "TUAS AVE 9, 4, 2, 5",
                    "SIXTH LOK YANG RD",
                    "LOK YANG WAY",
                    "PIONEER RD NTH"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "193",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1941: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "194",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "AHMAD IBRAHIM (LOOP)"
                ],
                scrollFont: "Calibri-7:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "194",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    1991: { // CHECK SCROLL
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "199",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "NANYANG AVE",
                    "NANYANG CRES",
                    "NANYANG DR"
                ],
                scrollFont: "ArialBold-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "199",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2401: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "BOON LAY DR",
                    "BOON LAY PLACE",
                    "KANG CHING RD",
                    "CORPORATION DR",
                    "JLN AHMAD IBRAHIM",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2402: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240A",
                destination: "LAKESIDE MRT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS AT",
                    topFont: "ArialBold-8:2",
                    bottom: "LAKESIDE MRT",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "240A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    2403: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240M",
                destination: "LAKESIDE MRT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2A",
                    top: "LAKESIDE MRT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BOON LAY DR",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "240M"
                },
                {
                    renderType: "destScroll2A",
                    top: "LAKESIDE MRT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BOON LAY PLACE",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "240M"
                },
                {
                    renderType: "destScroll2A",
                    top: "LAKESIDE MRT via",
                    topFont: "ArialBold-8:2",
                    bottom: "JUR WEST ST 64",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "240M"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    2411: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NTH",
                    "JURONG WEST ST 91",
                    "JURONG WEST ST 92",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "241",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2412: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241A",
                destination: "PIONEER MRT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS AT",
                    topFont: "ArialBold-8:2",
                    bottom: "PIONEER MRT",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "241A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "241A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    2421: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "242",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JLN BOON LAY",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 71",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "242",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2431: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243G",
                serviceFont: "Calibri-15",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 81",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 62",
                ],
                scrollFont: "Calibri-7"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "243G",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    2432: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243W",
                serviceFont: "Calibri-15",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 61",
                    "JURONG WEST AVE 5",
                    "JURONG WEST ST 82",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 64", // Ending scroll
                ],
                scrollFont: "Calibri-7"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "243w",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    2461: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "246",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "CHIN BEE DR",
                    "QUALITY RD",
                    "JLN TUKANG",
                    "CORPORATION DR",
                    "TAH CHING RD", 
                    "BOON LAY PLACE, DR",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "246",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2471: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "247",
                destination: "TUAS TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "TUAS LINK 4",
                    "TUAS AVE 7, 8",
                    "TUAS CRES",
                    "TUAS STH AVE 5,4,7",
                    "TUAS STH AVE 3,9,8",
                    "TUAS BAY LINK",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "247",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2481: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248",
                destination: "TUAS TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "TUAS AVE 20",
                    "TUAS CRESCENT",
                    "TUAS STH AVE 5, 12",
                    "TUAS STH AVE 14, 10",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "248",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2482: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248M",
                destination: "TUAS TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2B",
                    top: "TUAS TER via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS AVE 20",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "248M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS TER via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS CRESCENT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "248M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS TER via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS STH AVE 5, 12",
                    bottomFont: "Calibri-7:2",
            
                    serviceNumber: "248M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS TER via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS STH WAY",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "248M"
                },
                {
                    renderType: "destScroll2B",
                    top: "TUAS TER via",
                    topFont: "ArialBold-8:2",
                    bottom: "TUAS STH AVE 14,9,10",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "248M"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "248M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    2491: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "249",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JLN BOON LAY",
                    "JURONG PIER RD",
                    "JLN BUROH",
                    "TG KLING RD",
                    "JLN SAMULUN",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "249",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2492: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "249A",
                destination: "JURONG SHIPYARD",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS AT",
                    topFont: "ArialBold-8:2",
                    bottom: "JURONG SHIPYARD",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "249A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "249A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    2511: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "251",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "BOON LAY WAY",
                    "PIONEER RD NTH",
                    "PIONEER RD",
                    "SHIPYARD RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "251",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2521: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "252",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "ENTERPRISE RD",
                    "INTERNATIONAL RD",
                    "JOO KOON CIRCLE",
                    "JOO KOON RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "252",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
2531: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "253",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "BENOI RD",
                    "BENOI SECTOR",
                    "PIONEER RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "253",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2541: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "254",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "PIONEER RD",
                    "TUAS RD",
                    "TUAS AVE 20, 11",
                    "TUAS BASIN LK",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "254",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2551: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "255",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "GUL CIRCLE",
                    "GUL CRES",
                    "GUL AVE, WAY",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "255",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2571: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "257",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "BENOI RD",
                    "PIONEER RD",
                    "GUL RD",
                    "PIONEER SECTOR LN",
                    "PIONEER SECTOR 3",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "257",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2581: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JLN AHMAD IBRAHIM",
                    "PIONEER RD NTH",
                    "JURONG WEST ST 61",
                    "JURONG WEST ST 81",
                    "JURONG WEST ST 64",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "258",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    2582: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258M",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll2B",
                        top: "JOO KOON INT via",
                        topFont: "ArialBold-8:2",
                        bottom: "JLN AHMAD IBRAHIM",
                        bottomFont: "Calibri-7:2",
            
                        serviceNumber: "258M"
                    },
                    {
                        renderType: "destScroll2B",
                        top: "JOO KOON INT via",
                        topFont: "ArialBold-8:2",
                        bottom: "PIONEER RD NTH",
                        bottomFont: "Calibri-7:2",
            
                        serviceNumber: "258M"
                    },
                    {
                        renderType: "destScroll2B",
                        top: "JOO KOON INT via",
                        topFont: "ArialBold-8:2",
                        bottom: "JUR WEST ST 63, 61",
                        bottomFont: "Calibri-7:2",
            
                        serviceNumber: "258M"
                    },
                    {
                        renderType: "destScroll2B",
                        top: "JOO KOON INT via",
                        topFont: "ArialBold-8:2",
                        bottom: "JUR WEST ST 71, 81",
                        bottomFont: "Calibri-7:2",
            
                        serviceNumber: "258M"
                    },
                    {
                        renderType: "destScroll2B",
                        top: "JOO KOON INT via",
                        topFont: "ArialBold-8:2",
                        bottom: "JUR WEST ST 71, 81",
                        bottomFont: "Calibri-7:2",
            
                        serviceNumber: "258M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters",
                        top: "JOO KOON INT via",
                        topFont: "ArialBold-8:2",
                        bottom: "BOON LAY PLC (LOOP)",
                        bottomFont: "Calibri-7:2",
            
                        serviceNumber: "258M",
                        serviceFont: "Calibri-15",
                        spacing: "1"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "258M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    3001: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "300",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "300"
                },
                    "C. C. K AVE 4",
                    "C. C. K AVE 2",
                    "C. C. K WAY",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "300",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    3011: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "301",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "301"
                },
                    "C. C. K WAY",
                    "C. C. K AVE 2, 3",
                    "C. C. K AVE 5",
                {
                    renderType: "ScrollWithSpecialCharacters",
                    top: "C. C. K INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "KEAT HONG (LOOP)",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "301"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "301",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    3021: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "302",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "302"
                },
                    "C. C. K WAY",
                    "C. C. K ST 52",
                    "C. C. K CRES",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "302",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    3022: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "302A",
                destination: "YEW TEE MRT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8",
                    bottom: "OPP YEW TEE MRT",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "302A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "302A",
                font: "Arial-10",
                spacing: "1"
            }
        }
    },
    3071: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "307",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "307"
                },
                    "C. C. K AVE 4",
                    "C. C. K NTH 6",
                    "YEW TEE MRT",
                    "C. C. K ST 62",
                    "TECK WHYE LANE",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "307",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    3072: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "307A",
                destination: "C.C.K VIA YEW TEE",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS{OPP{CCK{MRt",
                    topFont: "ArialBold-8:2",
                    bottom: "YEW TEE MRT",
                    bottomFont: "Calibri-7:2",
        
                    serviceNumber: "307A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "307A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    3073: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "307T",
                destination: "C.C.K VIA TECK WHYE",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS{AT{CCK{INT{via",
                    topFont: "ArialBold-8:2",
                    bottom: "TECK WHYE",
                    bottomFont: "Calibri-7:2",
        
                    serviceNumber: "307T"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "307T",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    3151: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'FREE BRIDGING BUS',
                font: 'Calibri-10',
                spacing: 2,
                marginTop: 4
            },
            rear: { 
                renderType: 'twoline',
                top: "",
                topFont: "Arial-7",

                bottom: "",
                bottomFont: "Arial-7",
            }
        }
    },
    3152: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "LRT BRIDGING A",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'LRT BRIDGING A',
                        font: 'Calibri-11:2',
                        spacing: 2,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'twoline',
                top: "LRT",
                topFont: "ArialBold-8",

                bottom: "A",
                bottomFont: "ArialBold-8",
            }
        }
    },
    3153: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "LRT BRIDGING B",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'LRT BRIDGING B',
                        font: 'Calibri-11:2',
                        spacing: 2,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'twoline',
                top: "LRT",
                topFont: "ArialBold-8",

                bottom: "B",
                bottomFont: "ArialBold-8",
            }
        }
    },
    3154: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "NSL BRIDGING BUS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'NSL  BRIDGING  BUS',
                        font: 'Calibri-11:2',
                        spacing: 1,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'message',
                text: 'NSL',
                font: 'Calibri-11:2',
                spacing: 1,
                marginTop: 4
            }
        }
    },
    3155: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "EWL BRIDGING BUS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'EWL  BRIDGING  BUS',
                        font: 'Calibri-11:2',
                        spacing: 1,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'message',
                text: 'EWL',
                font: 'Calibri-11:2',
                spacing: 1,
                marginTop: 4
            }
        }
    },
    3156: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CCL BRIDGING BUS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'CCL  BRIDGING  BUS',
                        font: 'Calibri-11:2',
                        spacing: 1,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'message',
                text: 'CCL',
                font: 'Calibri-11:2',
                spacing: 1,
                marginTop: 4
            }
        }
    },
    3157: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TEL BRIDGING BUS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'TEL  BRIDGING  BUS',
                        font: 'Calibri-11:2',
                        spacing: 1,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'message',
                text: 'TEL',
                font: 'Calibri-11:2',
                spacing: 1,
                marginTop: 4
            }
        }
    },
    3160: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "NEL BRIDGING BUS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'NEL  BRIDGING  BUS',
                        font: 'Calibri-11:2',
                        spacing: 1,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'message',
                text: 'NEL',
                font: 'Calibri-11:2',
                spacing: 1,
                marginTop: 4
            }
        }
    },
    3161: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "DTL BRIDGING BUS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: 'message',
                        text: 'DTL  BRIDGING  BUS',
                        font: 'Calibri-11:2',
                        spacing: 1,
                        marginTop: 4
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: { 
                renderType: 'message',
                text: 'DTL',
                font: 'Calibri-11:2',
                spacing: 1,
                marginTop: 4
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "message",
                text: "FREE SHUTTLE",
                font: "LECIP-20:12",
                spacing: 2,
                marginTop: 0,
            },
            rear: {
                renderType: 'twoline',
                top: "FREE",
                topFont: "LECIP-7:4", // check font

                bottom: "SHUTTLE",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    4051: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JALAN BAHAR",
                    "OLD C. C. K RD",
                    "LIM CHU KANG RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "405",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    4059: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405M",
                serviceFont: "Calibri-15",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD C.C.K. RD"
                ],
                scrollFont: "Calibri-7:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "405M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    4171: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S7",
                destination: "TANAH MERAH",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SHUTTLE 7",
                    topFont: "ArialBold-8:2",
                    bottom: "TAMPINES - TANAH MERAH",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "S7"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S7",
                font: "Arial-17",
                spacing: 1
            }
        }
    },
    4172: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S7",
                destination: "TAMPINES",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SHUTTLE 7",
                    topFont: "ArialBold-8:2",
                    bottom: "TANAH MERAH - TAMPINES",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "S7"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S7",
                font: "Arial-17",
                spacing: 1
            }
        }
    },
    4361: { // Tbc
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S36",
                destination: "HARBOURFRONT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SHUTTLE 36",
                    topFont: "ArialBold-8:2",
                    bottom: "BISHAN - HARBOURFRONT",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "S36"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "Arial-17",
                spacing: 1
            }
        }
    },
    4362: { // Tbc
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S36",
                destination: "BISHAN",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SHUTTLE 36",
                    topFont: "ArialBold-8:2",
                    bottom: "HARBOURFRONT - BISHAN",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "S36"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "Arial-17",
                spacing: 1
            }
        }
    },
    4444: { // Done
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LECIP-20:12",
                spacing: 3,
                marginTop: 0
            },
            rear: {
                renderType: 'twoline',
                top: "ON",
                topFont: "LECIP-7:5",

                bottom: "TEST",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    4511: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "451",
                destination: "  ",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    " ",
                    " ",
                    " ",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "451",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    4512: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "451",
                destination: "  ",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    " ",
                    " ",
                    " ",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "451",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    4551: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "455",
                destination: "  ",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    " ",
                    " ",
                    " ",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "455",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    4552: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "455",
                destination: "  ",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    " ",
                    " ",
                    " ",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "455",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    5021: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "502",
                destination: "EXPRESS 502",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "!",
                        topFont: "Lecip-SMRTB9Speial",
            
                        serviceNumber: "502"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    5022: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "502",
                destination: "EXPRESS 502A",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "!",
                        topFont: "Lecip-SMRTB9Speial",
            
                        serviceNumber: "502A"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LECIP-20:12",
                spacing: 3,
                marginTop: 0,
            },
            rear: {
                renderType: 'twoline',
                top: "TRAINING",
                topFont: "LECIP-7:4",

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
           }
        },
        2: {
            front: {
                renderType: "message",
                text: "TRAINING IN PROGRESS",
                font: "LECIP-10",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "TRG IN     ",
                topFont: "LECIP-6:3",

                bottom: "PROGRESS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6651: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "SHENTON WAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    'MARSILING LANE',
                    "WDL AVE 5, 4",
                    "WDL AVE 1",
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "RAFFLES QUAY"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    6652: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "MARSILING DR via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "PENANG RD",
                    "WDL AVE 1",
                    "WDL AVE 4, 5",
                    "MARSILING LANE"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    6101: { //  Done 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: "EUNOS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "EUNOS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "61"
                },
                "CLEMENTI RD",
                "HOLLAND RD, AVE",
                "TELOK BLANGAH RD",
                "CHINATOWN",
                "UBI AVE 2",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "61",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    6102: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: "BT BATOK INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "61"
                },
                "UBI AVE 2",
                "MACPHERSON RD",
                "KALLANG BAHRU",
                "NORTH BRIDGE RD",
                "CLEMENTI RD",
                
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "61",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    6701: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: "TAMPINES via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "TAMPINES",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "67"
                },
                "UPP BUKIT TIMAH RD",
                "DUNEARN RD",
                "SERANGOON RD",
                "SIMS AVENUE",
                "BEDOK NTH AVE 3",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    6702: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "67"
                },
                "BEDOK NTH AVE 3",
                "NEW UPP CHANGI RD",
                "GEYLANG RD",
                "JALAN BESAR",
                "UPP BUKIT TIMAH RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },    
    7051: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT5 KRANJI DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "KRANJI DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT5"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "5",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7071: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT7 KRANJI DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "KRANJI DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT7"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "7",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7081: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT8 KRANJI DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "KRANJI DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT8"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "8",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7082: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT8 BULIM DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "BULIM DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT8"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "8",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7161: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT16 KRANJI DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "KRANJI DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT16"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "16",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7162: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT16 WOODLANDS BUS PARK",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "ArialBold-8:2",
                        bottom: "BUS PARK",
                        bottomFont: "ArialBold-8:2",
            
                        serviceNumber: "WT16"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "16",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7171: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT17 KRANJI DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "KRANJI DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT17"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "17",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7172: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT17 BULIM DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "BULIM DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT17"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "17",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7201: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT20 BULIM DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "BULIM DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT20"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "20",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7202: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT20 WOODLANDS BUS PARK",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "ArialBold-8:2",
                        bottom: "BUS PARK",
                        bottomFont: "ArialBold-8:2",
            
                        serviceNumber: "WT20"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "20",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7221: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT22 BULIM DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "BULIM DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT22"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "22",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7222: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT22 WOODLANDS BUS PARK",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "ArialBold-8:2",
                        bottom: "BUS PARK",
                        bottomFont: "ArialBold-8:2",
            
                        serviceNumber: "WT22"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "22",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7231: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT23 BULIM DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "BULIM DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT23"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "23",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7232: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT23 KRANJI DEPOT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "KRANJI DEPOT",
                        topFont: "Arial-10",
            
                        serviceNumber: "WT23"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "23",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7241: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT24 WOODLANDS BUS PARK",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "ArialBold-8:2",
                        bottom: "BUS PARK",
                        bottomFont: "ArialBold-8:2",
            
                        serviceNumber: "WT24"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "24",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7311: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT31",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WT 31",
                        topFont: "Arial-17",
            
                        serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "31",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7321: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT32",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WT 32",
                        topFont: "Arial-17",
            
                        serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "32",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7331: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT33",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WT 33",
                        topFont: "Arial-17",
            
                        serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "33",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7341: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT 34",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WT34",
                        topFont: "Arial-17",
            
                        serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "34",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7351: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT 35",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WT35",
                        topFont: "Arial-17",
            
                        serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "35",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7361: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT36",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WT 36",
                        topFont: "Arial-17",
            
                        serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "36",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7371: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WT37",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WT 37",
                        topFont: "Arial-17",
            
                        serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "WT",
                topFont: "ArialBold-8:2",
                bottom: "37",
                bottomFont: "ArialBold-8:2",
    
                serviceNumber: ""
            }
        }
    },
    7501: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "75",
                destination: "BUKIT MERAH via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Arial-12:2",
        
                    serviceNumber: "75"
                },
                    "UPP BUKIT TIMAH RD",
                    "CLEMENTI / HOLLAND RD",
                    "GREAT WORLD CITY",
                    "OUTRAM RD",
                    "TIONG BAHRU RD",
                    "KIM TIAN RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "75",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    7502: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "75",
                destination: "BUKIT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT",
                    topFont: "ArialBold-8:2",
                    bottom: "PANJANG",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "75"
                },   
                    "JLN BT MERAH",
                    "KIM TIAN RD",
                    "TIONG BAHRU RD",
                    "CLEMENTI RD",
                    "UPP BT TIMAH RD",   
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "75",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    7508: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "75",
                destination: "MARINA CENTRE via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "MARINA",
                    topFont: "ArialBold-8:2",
                    bottom: "CENTRE",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "75"
                },  
                    "UPP BUKIT TIMAH RD",
                    "CLEMENTI RD",
                    "GREAT WORLD CITY",
                    "OUTRAM RD",
                    "ESPLANADE DR",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "75",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    7509: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "75",
                destination: "BUKIT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT",
                    topFont: "ArialBold-8:2",
                    bottom: "PANJANG",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "75"
                },   
                    "COLLYER QUAY",
                    "SHENTON WAY",
                    "OUTRAM RD, MRT",
                    "CLEMENTI RD",
                    "UPP BT TIMAH RD",   
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "75",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    7600: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "EW1",
                destination: "TLK-GCL-JKN-BNL",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "→ TUAS LINK",
                    "→ GUL CIRCLE",
                    "→ JOO KOON",
                    "→ BOON LAY",
   
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EW1",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7601: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "EW2",
                destination: "BNV-CLE-JUR-BNL",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                "→ BUONA VISTA",
                "→ CLEMENTI",
                "→ JURONG EAST",
                "→ BOON LAY"
   
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EW2",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7602: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "EW3",
                destination: "PYL-BDK-TAM",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                "→ PAYA LEBAR",
                "→ BEDOK",
                "→ TAMPINES",
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EW3",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7603: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "NS1",
                destination: "JUR-BBT-CCK-WDL",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                "→ JURONG EAST",
                "→ BUKIT BATOK",
                "→ CHOA CHU KANG",
                "→ WOODLANDS",
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "NS1",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7604: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "NS2",
                destination: "BSH-AMK-YIS-WDL",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                "→ BISHAN",
                "→ ANG MO KIO",
                "→ YISHUN",
                "→ WOODLANDS",
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "NS2",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7605: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "EX1",
                destination: "BSH-AMK-YIS-WDL",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                "→ WOODLANDS",
                "→ BUKIT PANJANG",
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EX1",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7606: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "EX2",
                destination: "AMK-SRG",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                "→ ANG MO KIO",
                "→ SERANGOON",
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EX2",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7607: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "EX3",
                destination: "EUN-UBI",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                "→ EUNOS",
                "→ UBI",
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EX3",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "LECIP-20:9",
                spacing: 2,
                marginTop: 0,
            },
            rear: {
                renderType: 'twoline',
                top: "BRIDGING",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            } // check
        }
    },
    7996: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SMRT STAFF FERRY",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "message",
                        text: "SMRT STAFF FERRY @",
                        font: "Mobitec-SMRTStaffFerry",
                        spacing: 1,
                        marginTop: 2
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: 'twoline',
                top: "STAFF",
                topFont: "Calibri-7:2",
    
                bottom: "FERRY",
                bottomFont: "Calibri-7:2",
            }
        }
    },
    7997: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "K1 WDL < > HOTEL",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "HOTEL FERRY",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS BUS PARK",
                        bottomFont: "ArialBold-8:2",
            
                        serviceNumber: "K1"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "K1",
                topFont: "Arial-12:2",
    
                serviceNumber: ""
            }
        }
    },
    7998: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "F1 KJ < > HOTEL",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "HOTEL FERRY",
                        topFont: "ArialBold-8:2",
                        bottom: "KRANJI DEPOT",
                        bottomFont: "ArialBold-8:2",
            
                        serviceNumber: "F1"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "F1",
                topFont: "Arial-12:2",
    
                serviceNumber: ""
            }
        }
    },
    7999: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "F2 BU < > HOTEL",
                destinationFont: "Hanover-7:5",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "HOTEL FERRY",
                        topFont: "ArialBold-8:2",
                        bottom: "BULIM DEPOT",
                        bottomFont: "ArialBold-8:2",
            
                        serviceNumber: "F2"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "destScroll",
                top: "F2",
                topFont: "Arial-12:2",
    
                serviceNumber: ""
            }
        }
    },
    8681: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "868E",
                serviceFont: "Arial-15",
                destination: "SUNTEC CITY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "BT BATOK WEST AVE 5,4",
                    "BT BATOK WEST AVE 2,3",
                    "BT BATOK WEST AVE 6",
                    "BT BATOK AVE 1",
                    "JURONG EAST CTRL",
                    "TOH GUAN RD",
                    "ROBINSON RD",
                    "FULLERTON RD",
                    "ESPLANADE DR",
                    "TEMASEK BLVD"
                ],
                scrollFont: "Arial-8;Space-Width=1"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "868E",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9001: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "900",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "900"
                },
                    "WDL AVE 7, 4",
                    "WDL DRIVE 14",
                {
                    renderType: "destScroll",
                    top: "WOODLANDS INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "CHAMPIONS WAY",
                    bottomFont: "Arial-8",
            
                    serviceNumber: "900"
                },
                    "WDL DRIVE 17",
                    "WDL AVE 1, 4, 7"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "900",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9011: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "901",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "901"
                },
                    "WDL AVE 2, 1",
                    "WDL DRIVE 16",
                    "WDL AVE 6",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "901",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9012: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "901M",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS AVE 2",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "901M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS AVE 1",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "901M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS DR 16",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "901M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS AVE 6",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "901M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "ADMIRALTY MRT",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "901M"
                    },
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "901M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9021: { // Done / Reference from Mobi
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "902",
                destination: "REPUBLIC POLY",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "REPUBLIC",
                    topFont: "ArialBold-8:2",
                    bottom: "POLYTECHNIC",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "902"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "902",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9031: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "903"
                },
                    "WOODLANDS AVE 2",
                    "MARSILING DR",
                    "WDL CENTRE RD",
                    "WDL TRAIN CHKPT",
                    "ADMIRALTY RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "903",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9032: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903M",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS|INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS AVE 2",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "903M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS|INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "MARSILING RD",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "903M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS|INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "MARSILING LANE",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "903M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters",
                        top: "WOODLANDS|INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "MARSILING DR(LOOP)",
                        bottomFont: "Arial-8:2",
                
                        serviceNumber: "903M"
                    },
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "903M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9041: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "904",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "904"
                },
                    "WDL AVE 7, 6",
                    "WDL DR 62, 73",
                {
                    renderType: "ScrollWithSpecialCharacters",
                    top: "WOODLANDS INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "WDL CRES (LOOP)",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "904"
                },
                    "WDL DR 73, 62",
                    "WDL AVE 6, 7",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "904",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9111: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "911"
                },
                    "WDL AVE 7",
                    "WDL ST 83",
                    "WDL AVE 2",
                    "WDL ST 13",
                    "WDL TRAIN CHKPT",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "911",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9112: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911A",
                destination: "WOODLANDS ST 13",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS AT BLK 146",
                    topFont: "ArialBold-8:2",
                    bottom: "WOODLANDS ST 13",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "911A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "911A",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9113: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911T",
                destination: "ENDS AT WOODLANDS INT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "ENDS AT",
                        topFont: "Arial-8",
                        bottom: "WDL INT / MRT",
                        bottomFont: "Arial-8",
            
                        serviceNumber: "911T"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "911T",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9117: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WELCOME",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll3",
                        serviceNumber: "",
                        top: "Data from Sep 2024 onwards",
                        topFont: "Mobitec-7:4",
                        bottom: "(With Jurong West Package data)",
                        bottomFont: "Mobitec-7:4",
                        image: "roundel"
                    },
                    {
                        renderType: "logo",
                        text: "SMRT LOGO",
                        image: "logo"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WELCOME",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "",
                    topFont: "Hanover-7:3",
        
                    serviceNumber: ""
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
        }
    },
    9121: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "912"
                },
                    "WDL AVE 5, 2, 1",
                    "WDL ST 41",
                    "WDL TRAIN CHKPT",
                    "WDL DR 50",
                    "ADMIRALTY MRT",
                    
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9122: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912A",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "ScrollWithSpecialCharacters",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "wOODLANDS AVe 2, 5",
                        bottomFont: "Arial-8:2",
                
                        serviceNumber: "912A"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS DR 50",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "912A"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS RING RD",
                        bottomFont: "Arial-8:2",
                
                        serviceNumber: "912A"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "ADMIRALTY MRT",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "912A"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WDL AVE 7 (LOOP)",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "912A"
                    },
                ],
                scrollFont: "Arial-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912A",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9123: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912B",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WDL AVE 5, 2, 1",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "912B"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS ST 41",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "912B"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "TRAIN CHECKPOINT",
                        bottomFont: "Arial-8:2:2",
                
                        serviceNumber: "912B"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WDL CENTRE RD (LOOP)",
                        bottomFont: "Calibri-7:2",
                
                        serviceNumber: "912B"
                    },
                ],
                scrollFont: "Arial-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912B",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9124: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912M",
                destination: "WOODLANDS INT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "AVE 1, 2, 5",
                    "ST 41 (LOOP)"
                ],
                scrollFont: "Arial-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912M",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9131: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "913"
                },
                    "WDL AVE 7, 6",
                    "WDL CIRCLE",
                    "MARSILING RISE, RD",
                    "MARSILING MRT",
                    'WDL ST 13',
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9132: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913M",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "MARSILING RISE",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "913M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "MARSILING RD",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "913M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS AVE 1",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "913M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS ST 32",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "913M"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "WOODLANDS INTvia",
                        topFont: "ArialBold-8:2",
                        bottom: "WOODLANDS AVE 3",
                        bottomFont: "Arial-8",
                
                        serviceNumber: "913M"
                    },
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913M",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9133: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913T",
                destination: "ENDS AT WOODLANDS INT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "ENDS AT",
                        topFont: "Arial-8",
                        bottom: "WDL INT / MRT",
                        bottomFont: "Arial-8",
            
                        serviceNumber: "913T"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913T",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9166: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "MERRY CHRISTMAS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "MERRY CHRISTMAS",
                    topFont: "ArialBold-8:2",
                    bottom: "HAPPY NEW YEAR",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: ""
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
    9167: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'GONG XI FA CAI',
                font: 'Arial-15:2',
                spacing: 2,
                marginTop: 3
            },
            rear: { 
                renderType: 'twoline',
                top: "",
                topFont: "ArialBold-8",

                bottom: "",
                bottomFont: "Arial-7",
            }
        }
    },
    9168: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SELAMAT HARI RAYA",
                destinationFont: "ArialBold-8:2",
                scrolls: [
            {
                renderType: 'message',
                text: 'SELAMAT HARI RAYA',
                font: 'Calibri-11:1',
                spacing: 1,
                marginTop: 4
            },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
    9169: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'HAPPY DEEPAVALI',
                font: 'Arial-12',
                spacing: 1,
                marginTop: 4
            },
            rear: { 
                renderType: 'twoline',
                top: "",
                topFont: "ArialBold-8",

                bottom: "",
                bottomFont: "Arial-7",
            }
        }
    },
    9170: { // Done
        1: {
            front: {
                renderType: "destScroll3",
                serviceNumber: "",
                top: "HAPPY NATIONAL DAY",
                bottom: "SINGAPORE !",
                image: "SG-Flag"
            },
            rear: { 
                renderType: "logo",
                text: "NDP",
                image: "SG-Flag2"
            }
        }
    },
    9171: { // Done
        1: {
            front: {
                renderType: 'message',
                text: 'YOUR RIDE, OUR PRIDE',
                font: 'Calibri-10',
                spacing: 2,
                marginTop: 5
            },
            rear: { 
                renderType: 'twoline',
                top: "",
                topFont: "ArialBold-8",

                bottom: "",
                bottomFont: "Arial-7",
            }
        }
    },
    9172: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Moving WITH you",
                destinationFont: "ArialBold-8:3",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "Moving WITH you - 13 June",
                    topFont: "ArialBold-8:3",
        
                    serviceNumber: ""
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WELCOME",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "",
                    topFont: "Hanover-7:3",
                    bottom: "",
                    bottomFont: "Hanover-7:3",
        
                    serviceNumber: ""
                },
                ],
                scrollFont: "ArialBold-8:2"
            }
        }
    },
    9201: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "920",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / LRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "920"
                },
                    "PETIR / JELEBU RD",
                    "SENJA CLOSE",
                    "SENJA RD",
                    "JELAPANG RD",
                    "BANGKIT RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "920",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9221: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "922",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / LRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "922"
                },
                    "PETIR / JELEBU RD",
                    "JELAPANG RD",
                    "SEGAR / FAJAR RD",
                    "BT PANJANG RING RD",
                    "BANGKIT RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "922",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9251: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "925",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "925"
                },
                    "WDL AVE 3",
                    "KRANJI WAY",
                    "WDL RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "925",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9252: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "925",
                destination: "WDL TEMP INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "WOODLANDS RD",
                    "SUNGEI KADUT ST 1",
                    "KRANJI WAY",
                    "WDL AVE 3",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "925",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9253: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "925A",
                destination: "KRANJI RESERVOIR PARK B",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT  KRANJI",
                    topFont: "ArialBold-8:2",
                    bottom: "RESERVOIR PK B",
                    bottomFont: "ArialBold-8",
        
                    serviceNumber: "925A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "925A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9254: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "925M",
                serviceFont: "Calibri-15",
                destination: "SUNGEI BULOH via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "WOODLANDS AVE 3",
                    "KRANJI RD, LOOP",
                    "KRANJI WAY",
                    "NEO TIEW LANE",         
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "925M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9255: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "925M",
                serviceFont: "Calibri-15",
                destination: "WDL TEMP INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "KRANJI WAY",
                    "KRANJI LOOP, RD",
                    "WOODLANDS AVE 3",
             
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "925M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9271: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "927",
                destination: "S'PORE ZOO via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SINGAPORE",
                    topFont: "ArialBold-8:2",
                    bottom: "ZOOLOGICAL GDN",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "927"
                },
                    'C. C. K DRIVE',
                    'WOODLANDS ROAD',
                    'MANDAI ROAD',
    
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "927",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9272: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "927",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "927"
                },
                    "MANDAI ROAD",
                    "WOODLANDS ROAD",
                    "C. C. K DRIVE",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "927",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9501: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "950",
                destination: "S'PORE ⇔ JB",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JB SENTRAL TER",
                    "WDL TEMP INT"
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "950",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9511: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "951E",
                destination: "SHENTON WAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "WDL AVE 4, 5",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "951E",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9512: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "951E",
                destination: "WDL ST 82 via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "ArialBold-8:2",
                        bottom: "STREET 82",
                        bottomFont: "ArialBold-8:2",
                
                        serviceNumber: "951E"
                    },
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WDL AVE 5, 4"

                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "951E",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9601: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960",
                destination: "MARINA CENTRE via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "MARINA",
                    topFont: "ArialBold-8:2",
                    bottom: "CENTRE",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "960"
                },
                    'WOODLANDS RD',
                    "BT PANJANG RD",
                    "BKE / PIE",
                    "BT TIMAH RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        },
    },
    9602: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960",
                destination: "WOODLANDS via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "960"
                },
                    "VICTORIA ST",
                    "BT TIMAH RD",
                    "PIE / BKE",
                    "BT PANJANG RD",
                    "WOODLANDS RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9603: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960e",
                destination: "MARINA CENTRE via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "WOODLANDS AVE 3",
                    "B K E / P I E",
                    "DUNEARN RD",
                    "BT TIMAH RD",
                    "VICTORIA ST",
                    "RAFFLES BLVD"
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960e",
                font: "Arial-10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "960e",
                destination: "EXPRESS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "!",
                        topFont: "Lecip-SMRTB9Speial",
            
                        serviceNumber: "960e"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960e",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9604: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960e",
                destination: "WOODLANDS via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "RAFFLES AVE",
                    "VICTORIA ST",
                    "BT TIMAH RD",
                    "P I E / B K E",
                    "WOODLANDS AVE 3"
                ],
                scrollFont: "Arial-8:2:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960e",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9611: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961",
                destination: "LOR 1 GEYLANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "GEYLANG LOR 1 / ",
                    topFont: "ArialBold-8:2",
                    bottom: "KALLANG MRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "961"
                },
                    "WDL AVE 3",
                    "UPP BT TIMAH RD",
                    "JLN BT MERAH",
                    "CHINATOWN",
                    "BEACH RD",
                    'KALLANG BAHRU',
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "961",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9612: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961",
                destination: "WDL TEMP INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    'KALLANG BAHRU',
                    "BEACH RD",
                    "CHINATOWN",
                    "JLN BT MERAH",
                    "UPP BT TIMAH RD",
                    "WDL AVE 3"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "961",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9613: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961M",
                destination: "LOR 1 GEYLANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "GEYLANG LOR 1 / ",
                    topFont: "ArialBold-8:2",
                    bottom: "KALLANG MRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "961M"
                },
                    "WDL AVE 3",
                    "UPP BT TIMAH RD",
                    "JLN BT MERAH",
                    "CHINATOWN",
                    "MARINA CENTRE",
                    "BEACH RD",
                    'KALLANG BAHRU',
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "961M",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9614: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961M",
                serviceFont: "Calibri-15",
                destination: "WDL TEMP INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "KALLANG BAHRU",
                    "BEACH RD",
                    "MARINA CENTRE",
                    "CHINATOWN",
                    "JLN BT MERAH",
                    "UPP BT TIMAH RD",            
                ],
                scrollFont: "Calibri-7:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "961M",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9621: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "962",
                destination: "ADMIRALTY ST via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ADMIRALTY",
                    topFont: "ArialBold-8:2",
                    bottom: "STREET",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "962"
                },
                    "WDL AVE 5, 6, 7",
                    "SEMBAWANG WAY",
                    "SEMBAWANG CRES",
                    "SEMBAWANG DR"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "962",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9622: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "962",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "962"
                },
                    "SEMBAWANG DR",
                    "SEMBAWANG WAY",
                    "SEMBAWANG CRES",
                    "WDL AVE 7, 6, 5",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "962",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9623: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "962A",
                destination: "SEMBAWANG DRIVE",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8",
                    bottom: "SEMBAWANG DR",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "962A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "962A",
                font: "Arial-10",
                spacing: "1"
            }
        }
    },
    9624: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "962B",
                destination: "SEMBAWANG DRIVE",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8",
                    bottom: "SEMBAWANG DR",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "962B"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "962B",
                font: "Arial-10",
                spacing: "1"
            }
        }
    },
    9625: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "962C",
                destination: "WOODLANDS AVE 6",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT BLK 680",
                    topFont: "Arial-8",
                    bottom: "WOODLANDS AVE 6",
                    bottomFont: "Arial-8",
        
                serviceNumber: "962C"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "962C",
                font: "Arial-10",
                spacing: "1"
            }
        }
    },
    9641: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "964",
                destination: "WOODLANDS INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "964"
                },
                    "WDL AVE 7, 6",
                    "WDL LOOP",
                    "WDL LINK"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "964",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9671: { // Done
      1: {
          front: {
                renderType: "standardService",
                serviceNumber: "967",
                destination: "WDL TEMP INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "WOODLANDS AVE 3, 1",
                    "WOODLANDS ST 41",
                    "WOODLANDS AVE 1",
                {
                    renderType: "ScrollWithSpecialCharacters",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "WDL DR 17 (LOOP)",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "967"
                },
                ],
                scrollFont: "ArialBold-8:2"
           },
            rear: {
                renderType: "rearService",
                serviceNumber: "967",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9701: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: "SHENTON WAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SHENTON",
                    topFont: "ArialBold-8:2",
                    bottom: "WAY",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },
                    "HILLVIEW RD, AVE",
                    "JLN JURONG KECHIL",
                    "DUNEARN RD",
                    "C'WEALTH AVE",
                    "EU TONG SEN ST",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9702: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },
                    "NEW BRIDGE RD",
                    "C'WEALTH AVE",
                    "UPP BT TIMAH RD",
                    "JLN JUR KECHIL",
                    "HILLVIEW RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9708: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: "SHENTON WAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SHENTON",
                    topFont: "ArialBold-8:2",
                    bottom: "WAY",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },        
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY via",
                    topFont: "ArialBold-8:2",
                    bottom: "HILLVIEW AVE",
                    bottomFont: "Arial-8:2:2",
        
                    serviceNumber: "970"
                },
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY via",
                    topFont: "ArialBold-8:2",
                    bottom: "JLN JURONG KECHIL",
                    bottomFont: "Arial-8:2:2",
        
                    serviceNumber: "970"
                },
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY via",
                    topFont: "ArialBold-8:2",
                    bottom: "DUNEARN RD",
                    bottomFont: "Arial-8:2:2",
        
                    serviceNumber: "970"
                },
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY via",
                    topFont: "ArialBold-8:2",
                    bottom: "SIXTH AVE",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                }, 
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY via",
                    topFont: "ArialBold-8:2",
                    bottom: "EU TONG ST",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                }, 
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9709: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: "BUKIT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT",
                    topFont: "ArialBold-8:2",
                    bottom: "PANJANG",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },   
                {
                    renderType: "destScroll",
                    top: "BT PANJANG via",
                    topFont: "ArialBold-8:2",
                    bottom: "NEW BRIDGE RD",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },       
                {
                    renderType: "destScroll",
                    top: "BT PANJANG via",
                    topFont: "ArialBold-8:2",
                    bottom: "ZION RD",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },     
                {
                    renderType: "destScroll",
                    top: "BT PANJANG via",
                    topFont: "ArialBold-8:2",
                    bottom: "COMMONWEALTH AVE",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "970"
                },
                {
                    renderType: "destScroll",
                    top: "BT PANJANG via",
                    topFont: "ArialBold-8:2",
                    bottom: "SIXTH AVE",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },     
                {
                    renderType: "destScroll",
                    top: "BT PANJANG via",
                    topFont: "ArialBold-8:2",
                    bottom: "HILLVIEW RD",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "970"
                },     
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9721: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972",
                destination: "ORCHARD via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ORCHARD",
                    topFont: "ArialBold-8:2",
                    bottom: "ROAD",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "972"
                },
                    "BT PANJANG RD",
                    "SENJA RD",
                    "SEGAR / FAJAR RD",
                    "WHITLEY RD",
                    "STEVENS RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9722: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "972"
                },
                    "PENANG RD",
                    "SOMERSET RD",
                    "ORCHARD RD",
                    "PIE / BKE",
                    "SENJA LINK / RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9723: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972A",
                destination: "DHOBY GHAUT MRT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8",
                    bottom: "DHOBY GHAUT MRT",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "972A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972A",
                font: "Arial-10",
                spacing: "1"
            }
        }
    },
    9724: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972M",
                serviceFont: "Calibri-15",
                destination: "ORCHARD RD via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "SENJA ROAD",
                    "JELAPANG RD",
                    "SEGAR / FAJAR RD",
                {
                    renderType: "destScroll2",
                    top: "ORCHARD RD via",
                    topFont: "ArialBold-8:2",
                    bottom: "BT PANJANG RING RD",
                    bottomFont: "Calibri-7:2",
                    
                    serviceNumber: "972M"
                },
                {
                    renderType: "destScroll2",
                    top: "ORCHARD RD via",
                    topFont: "ArialBold-8:2",
                    bottom: "PENDING / PETIR RD",
                    bottomFont: "Calibri-7:2",
                    
                    serviceNumber: "972M"
                },
                    "BKE / PIE",
                    "DUNEARN ROAD",
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9725: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972M",
                serviceFont: "Calibri-15",
                destination: "BT PANJANG INT via",
                destinationFont: "Arial-8:2",
                scrolls: [
                    "PENANG RD",
                    "SOMERSET RD",
                    "ORCHARD TURN",
                    "SCOTTS RD",
                    "BT TIMAH RD",
                    "P I E  /  B K E",
                    "PETIR / PENDING RD",
                {
                    renderType: "destScroll2",
                    top: "BT PANJANG INT via",
                    topFont: "Arial-8:2",
                    bottom: "BT PANJANG RING RD",
                    bottomFont: "Calibri-7:2",
                    
                    serviceNumber: "972M"
                },
                    "FAJAR / SEGAR RD",
                    "JELAPANG RD",
                    "SENJA LINK / ROAD"
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },

    9731: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "973",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT",
                    topFont: "ArialBold-8:2",
                    bottom: "PANJANG",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "973"
                },
                    "BUKIT PANJANG RD",
                    "PENDING / PETIR",
                    "DAIRY FARM RD",
                    "HILLVIEW AVE",
                {
                    renderType: "ScrollWithSpecialCharacters",
                    top: "BT PANJANG via",
                    topFont: "ArialBold-8:2",
                    bottom: "HUME AVE (LOOP)",
                    bottomFont: "ArialBold-8:2",
                
                    serviceNumber: "973"
                },    
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "973",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9732: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "973A",
                destination: "PENDING STN",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8",
                    bottom: "BEF PENDING STN",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "973A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "973A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9741: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "UPP JURONG RD",
                    "JURONG WEST ST 64",
                    "JLN BOON LAY",
                    "JLN BAHAR",
                    "PIE, KJE",
                    "C. C. K DR, MRT",
                    "C. C. K WAY"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9742: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "C. C. K WAY",
                    "C. C. K MRT, DR",
                    "KJE, PIE",
                    "JLN BAHAR",
                    "JLN BOON LAY",
                    "JURONG WEST ST 64",
                    "UPPER JURONG RD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    }, 
    9743: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974A",
                destination: "C.C.K STN / LOT 1",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "ENDS AT LOT 1",
                    topFont: "ArialBold-8:2",
                    bottom: "C. C. K STN",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "974A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9751: { // Dest scroll font wrong
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "975",
                destination: "LIM CHU KANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "LIM CHU KANG",
                    topFont: "Arial-12:2",
        
                    serviceNumber: "975"
                },
                "TECK WHYE AVE",
                "C.C.K MRT",
                "C.C.K WAY, AVE 3",
                "OLD C.C.K RD",
                "LIM CHU KANG RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "975",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9752: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "975",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT",
                    topFont: "ArialBold-8:2",
                    bottom: "PANJANG",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "975"
                },
                    "LIM CHU KANG",
                    "OLD C.C.K RD",
                    "C.C.K AVE 3, WAY",
                    "C.C.K MRT",
                    "TECK WHYE AVE"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "975",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9753: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "975A",
                destination: "BRICKLAND RD",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "ArialBold-8:2",
                    bottom: "BRICKLAND RD",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "975A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "975A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9754: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "975B",
                destination: "LIM CHU KANG RD",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT OPP",
                    topFont: "Arial-8:2:2",
                    bottom: "LIM|CHU|KANG|LANE|3",
                    bottomFont: "Arial-8:2",
        
                    serviceNumber: "975B"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "975B",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9755: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "975C",
                destination: "LIM CHU KANG RD",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "ArialBold-8:2",
                    bottom: "POLICE COAST GUARD",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "975C"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "975C",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9761: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "976",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT",
                    topFont: "ArialBold-8:2",
                    bottom: "PANJANG",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "976"
                },
                    "C. C. K ROAD",
                    "SENJA ROAD",
                    "SEGAR ROAD",
                    "BT PJ RING RD",
                    "PETIR ROAD",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "976",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9762: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "976",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "976"
                },
                    "PETIR ROAD",
                    "BT PJ RING RD",
                    "SEGAR ROAD",
                    "SENJA ROAD",
                    'C. C. K ROAD',
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "976",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9791: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "979",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT",
                    topFont: "ArialBold-8:2",
                    bottom: "PANJANG",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "979"
                },
                    "WOODLANDS RD",
                    "C.C.K NTH 5 / ST 52",
                    "C.C.K DR / NTH 7",
                {
                    renderType: "ScrollWithSpecialCharacters",
                    top: "BT PANJANG via",
                    topFont: "ArialBold-8:2",
                    bottom: "C. C. K CRES (LOOP)",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "979"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "979",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9792: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "979X",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2B",
                    top: "BT PANJANG INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "C.C.K DRIVE",
                    bottomFont: "Calibri-7:2",
            
                    serviceNumber: "979X"
                },
                {
                    renderType: "destScroll2B",
                    top: "BT PANJANG INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "C.C.K NORTH 7",
                    bottomFont: "Calibri-7:2",
            
                    serviceNumber: "979X"
                },
                {
                    renderType: "destScroll2B",
                    top: "BT PANJANG INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "C.C.K CRES (LOOP)",
                    bottomFont: "Calibri-7:2",
            
                    serviceNumber: "979X"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "979X",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9821: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "982E",
                destination: "MARINA BLVD via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "C.C.K AVE 5, 4",
                    "C.C.K WAY / AVE 1",
                    "TECK WHYE AVE",
                    "CHOA CHU KANG RD",
                    "BT BATOK RD",
                    "ANSON RD",
                    "ROBINSON RD",
                ],
                scrollFont: "Arial-8;Space-Width=1"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "982E",
                font: "Arial-10",
                spacing: 2
            }
        }
    },
    9822: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "982",
                destination: "CHOA CHU KANG AVE 5 via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "CHOA|CHU|KANG|AVE5",
                        topFont: "Arial-8:2",
                        bottom: "CENTRAL BLVD",
                        bottomFont: "Arial-8;Space-Width=1",
                
                        serviceNumber: "982E"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "CHOA|CHU|KANG|AVE5",
                        topFont: "Arial-8:2",
                        bottom: "SHENTON WAY",
                        bottomFont: "Arial-8;Space-Width=1",
                
                        serviceNumber: "982E"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "CHOA|CHU|KANG|AVE5",
                        topFont: "Arial-8:2",
                        bottom: "BT BATOK RD",
                        bottomFont: "Arial-8;Space-Width=1",
                
                        serviceNumber: "982E"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "CHOA|CHU|KANG|AVE5",
                        topFont: "Arial-8:2",
                        bottom: "CHOA CHU KANG RD",
                        bottomFont: "Arial-8;Space-Width=1",
                
                        serviceNumber: "982E"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "CHOA|CHU|KANG|AVE5",
                        topFont: "Arial-8:2",
                        bottom: "TECK WHYE AVE",
                        bottomFont: "Arial-8;Space-Width=1",
                
                        serviceNumber: "982E"
                    },
                    {
                        renderType: "ScrollWithSpecialCharacters2",
                        top: "CHOA|CHU|KANG|AVE5",
                        topFont: "Arial-8:2",
                        bottom: "CCK AVE 1 / WAY",
                        bottomFont: "Arial-8;Space-Width=1",
                
                        serviceNumber: "982E"
                    },
                    {
                        renderType: "destScroll",
                        top: "CHOA|CHU|KANG|AVE5",
                        topFont: "Arial-8:2",
                        bottom: "CHOA CHU KANG AVE 4",
                        bottomFont: "Calibri-7:2",
                
                        serviceNumber: "982E"
                    },
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "982E",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9831: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "983",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "983"
                },
                    "C. C. K AVE 4, 5, 6, 1",
                    "C. C. K ROAD",
                {
                    renderType: "ScrollWithSpecialCharacters",
                    top: "C. C. K INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BT PANJANG RD (LOOP)",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "983"
                },
                    
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "983",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9832: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "983A",
                destination: "CHOA CHU KANG RD",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT BLK 26       ",
                    topFont: "Arial-8",
                    bottom: "CHOA CHU KANG RD",
                    bottomFont: "Arial-8",
        
                    serviceNumber: "983A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "983A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9833: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "983M",
                destination: "TECK WHYE CRES via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                        renderType: "destScroll2",
                        top: "TecK wHYe creS via",
                        topFont: "Arial-8:2",
                        bottom: "C. C. K AVE 6, 1",
                        bottomFont: "Calibri-7:2",
                
                        serviceNumber: "983M"
                    },
                    {
                        renderType: "destScroll2",
                        top: "TecK wHYe creS via",
                        topFont: "Arial-8:2",
                        bottom: "C. C. K AVE 7",
                        bottomFont: "Calibri-7:2",
                
                        serviceNumber: "983M"
                    },
                    {
                        renderType: "destScroll2",
                        top: "TecK wHYe creS via",
                        topFont: "Arial-8:2",
                        bottom: "C. C. K GROVE",
                        bottomFont: "Calibri-7:2",
                
                        serviceNumber: "983M"
                    },
                    {
                        renderType: "destScroll2",
                        top: "TecK wHYe creS via",
                        topFont: "Arial-8:2",
                        bottom: "C. C. K WAY",
                        bottomFont: "Calibri-7:2",
                
                        serviceNumber: "983M"
                    },    
                    {
                        renderType: "destScroll2",
                        top: "TecK wHYe creS via",
                        topFont: "Arial-8:2",
                        bottom: "C. C. K AVE 1",
                        bottomFont: "Calibri-7:2",
                
                        serviceNumber: "983M"
                    },            
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "983M",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9851: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: "LOR 1 GEYLANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "LOR 1 GEYLANG",
                    topFont: "Arial-10",
            
                    serviceNumber: "985"
                },
                "TECK WHYE AVE",
                "B. B WEST AVE 7, 2",
                "B. B EAST AVE 2",
                'JLN JURONG KECHIL',
                "BENDEMEER RD"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "985",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9852: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "985"
                },
                    "SERANGOON RD",
                    "JLN JURONG KECHIL",
                    "B.B EAST AVE 2",
                    "B.B. WEST AVE 2, 7",
                    "TECK WHYE AVE"
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "985",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9911: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: "C. C. K INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHOA CHU KANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT / LRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "991"
                },
                    "B. B WEST AVE 3, 6",
                    "B. B WEST AVE 8, 5",
                    "BRICKLAND RD",
                    "C. C. K AVE 3, 1",
                    'KEAT HONG LINK',
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9912: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: "BT BATOK via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
            
                    serviceNumber: "991"
                },
                "KEAT HONG LINK",
                "C. C. K AVE 1, 3",
                "BRICKLAND RD",
                "B. B WEST AVE 5, 8",
                "B. B WEST AVE 6, 3",
                
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9913: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991A",
                destination: "BUKIT BATOK WEST AVE 3",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT PRINCESS",
                    topFont: "Arial-8:2:2",
                    bottom: "ELIZABETH PRI SCH",
                    bottomFont: "Arial-8:2:2",
        
                    serviceNumber: "991A"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991A",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9914: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991B",
                destination: "CHOA CHU KANG AVE 1",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT OPP",
                    topFont: "Arial-8:2:2",
                    bottom: "C.C.K MARKET",
                    bottomFont: "Arial-8:2:2",
        
                    serviceNumber: "991B"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991B",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9915: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991C",
                destination: "BUKIT BATOK WEST AVE 5",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ENDS AT",
                    topFont: "Arial-8:2:2",
                    bottom: "BT GOMBAK MRT",
                    bottomFont: "Arial-8:2:2",
        
                    serviceNumber: "991C"
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991C",
                font: "Arial-10",
                spacing: 1
            }
        }
    },
    9990: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "989",
                destination: "CHANGI AIRPORT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CHANGI AIRPORT",
                    topFont: "Arial-10",
        
                    serviceNumber: "989"
                },
                'TECK WHYE AVE',
                {
                    renderType: "message",
                    text: "989",
                    font: "Arial-17",
                    spacing: 5,
                    marginTop: 1
                },
                'BT BATOK RD',
                "B. B. WEST AVE 7, 5, 2",
                {
                    renderType: "message",
                    text: "989",
                    font: "Arial-17",
                    spacing: 5,
                    marginTop: 1
                },
                'BT BATOK CTR/MRT',
                'B. B. EAST AVE 6',
                {
                    renderType: "message",
                    text: "989",
                    font: "Arial-17",
                    spacing: 5,
                    marginTop: 1
                },
                "JALAN TOA PAYOH",
                'AIRPORT BLVD',
                {
                    renderType: "message",
                    text: "989",
                    font: "Arial-17",
                    spacing: 5,
                    marginTop: 1
                },

                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "989",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "256",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    "JURONG WEST ST 62",
                    "PIONEER RD NORTH",
                    "JLN AHMAD IBRAHIM",
                    "JOO KOON INT (LOOP)",
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "256",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9995: { // yes
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: "NEW BRIDGE RD via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "NEW BRIDGE RD",
                    topFont: "ArialBold-8:2",
                    bottom: "TERMINAL",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "190"
                },
                    'BT PANJANG RD',
                    'STEVEN ROAD',
                    'ORCHARD ROAD',
                    'HILL STREET',
                    'CHINATOWN'
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
            }
        }
    },
    9996: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "THINK SAFETY",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "THINK SAFETY. WORK SAFELY",
                    topFont: "ArialBold-8:2",
                    bottom: "GO HOME SAFE",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: ""
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
    9998: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SMRT FIRST JURONG WEST BUS",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "SMRT FIRST",
                    topFont: "ArialBold-8:2",
                    bottom: "JURONG WEST BUS",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: ""
                },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
}


EDSImages.SMRT = {
    "logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "roundel": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    "SG-Flag": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    "SG-Flag2": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    "Chingay50-firework": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    "Chingay50-TextOnly": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    ],
    express: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
}
