EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
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
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1,
            },
            text: "$serviceNumber",
            font: "Arial-17",
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
    destScroll2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1,
                top: 1,
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
                bottom: 1
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    destScroll2A: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1,
                top: 1,
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
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
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
    117: {
        1: {
            front: {
                renderType: "logo",
                text: "SMRT LOGO",
                image: "logo"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "SMRT",
                font: "ArialBold-8",
                spacing: 2
            },
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
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "179"
                    },
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
                    renderType: "destScroll2A",
                    top: "BOON LAY INT",
                    topFont: "ArialBold-8:2",
                    bottom: "NTU (LOOP)",
                    bottomFont: "Calibri-7",
        
                    serviceNumber: "179A"
                    },
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179A",
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
    1811: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "181"
                    },
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
    1841: { // Confirmed
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
    1901: {
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
                    'STEVENS ROAD',
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
    1921: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "TUAS TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "TUAS",
                    topFont: "ArialBold-8:2",
                    bottom: "",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "192"
                    },
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
                    {
                    renderType: "destScroll",
                    top: "TUAS",
                    topFont: "ArialBold-8:2",
                    bottom: "",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "192"
                    },
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
    1931: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "193"
                    },
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
    1932: { // Done / Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "TUAS TER via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "TUAS",
                    topFont: "ArialBold-8:2",
                    bottom: "T",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "193"
                    },
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
    1991: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "199",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "199"
                    },
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
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "240"
                    },
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
    2411: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "241"
                    },
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
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
    2421: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "242",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "242"
                    },
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
                    {
                    renderType: "destScroll2",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "243G"
                    },
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 61",
                    "JURONG WEST AVE 5",
                    "JURONG WEST ST 82",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 62",
                ],
                scrollFont: "Calibri-7"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "243G",
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
    2432: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243W",
                serviceFont: "Calibri-15",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll2",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "243W"
                    },

                    "JURONG WEST ST 64",
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
                serviceNumber: "243W",
                font: "ArialBold-8:2",
                spacing: 2
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
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "246"
                    },
                    "BOON LAY PLACE, DR",
                    "CHIN BEE DR",
                    "QUALITY RD",
                    "JLN TUKANG",
                    "CORPORATION DR",
                    "TAH CHING RD"
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
    2491: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "249",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "249"
                    },
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
                font: "ArialBold-8:2",
                spacing: 2
            }
        }
    },
    2511: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "251",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "251"
                    },
                    "BOON LAY WAY",
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
    2521: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "252",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "252"
                    },
                    "JOO KOON CIRCLE",
                    "JOO KOON RD",
                    "ENTERPRISE RD",
                    "INTERNATIONAL RD",
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
    4051: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405",
                destination: "BOON LAY INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "405"
                    },
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD C.C.K. RD"
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
    9000: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "WELCOME",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll2",
                    top: "SMRT LECIP - NEW VERSION",
                    topFont: "ArialBold-8:2",
                    bottom: "WORK IN PROGRESS",
                    bottomFont: "ArialBold-8:2",
        
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
                    top: "Work In",
                    topFont: "Hanover-7:3",
                    bottom: "Progress",
                    bottomFont: "Hanover-7:3",
        
                    serviceNumber: ""
                    },
                ],
                scrollFont: "ArialBold-8:2"
            }
        }
    },
    9990: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "243W",
                    font: "Calibri-15"
                },
                scrolls: [
                    ""
                ],
                scrollFont: 'Calibri-15'
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "",
                    font: "Hanover-7:3"
                },
                scrolls: [
                    ""
                ],
                scrollFont: "Hanover-7:3"
            }
        }
    },
    9997: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "MCHNY",
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
    9999: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "176",
                destination: "BUKIT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "ArialBold-8:2",
                    bottom: "INT / MRT",
                    bottomFont: "ArialBold-8:2",
        
                    serviceNumber: "176"
                    },
                    'WEST COAST HIGHWAY',
                    "JURONG TOWN HALL"
                ],
                scrollFont: "ArialBold-8;2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "176",
                font: "LECIP-SMRTRear14:9",
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
    ]
}
