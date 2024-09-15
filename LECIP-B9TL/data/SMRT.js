EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1,
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
                top: 2
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
    2: {
        1: {
            front: {
                renderType: 'message',
                text: 'SOON LEE DEPOT',
                font: 'Calibri-11',
                spacing: 2,
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
                spacing: 1
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
                    "C.C.K ROAD"
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
    1812: { // 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181M",
                serviceFont: "Calibri-15",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [

                    "JURONG WEST"
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
    1881: {
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
                'CLEMENTI',
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
    1882: {
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
    1902: {
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
    1991: {
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
                    renderType: "destScroll2A",
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
                destination: "LAKESIDE MRT",
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
    2491: {
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
                    renderType: "destScroll2A",
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
    2511: {
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
2531: {
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
    2541: {
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
    2551: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "253",
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
    2571: {
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
    2581: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [

                    "JLN AHMAD IBRAHIM",
                    "PIONEER RD NTH",
                    "GUL RD",
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
    4051: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405",
                destination: "BOON LAY via",
                destinationFont: "ArialBold-8:2",
                scrolls: [

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
    9021: {
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
    9601: {
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
        }
    },
    9602: {
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
                    'WOODLANDS RD',
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
    9851: {
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
                'JLN JURONG KECHIL',
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
    9852: {
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
                    'JLN JURONG KECHIL'
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
    9741: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "BT PANJANG via",
                destinationFont: "ArialBold-8:2",
                scrolls: [

                    "UPP JURONG RD",
                    "JURONG WEST ST 63, 64",
                    "JLN BOON LAY",
                    "JLN BAHAR",
                    "PIE, KJE",
                    "CCK DR, MRT",
                    "CHOA CHU KANG WAY"
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
    9742: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON INT via",
                destinationFont: "ArialBold-8:2",
                scrolls: [

                    "CHOA CHU KANG WAY",
                    "CCK MRT, DR",
                    "KJE, PIE",
                    "JLN BAHAR",
                    "JLN BOON LAY",
                    "JURONG WEST ST 64, 63",
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
    9990: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: "MEI LING ST via",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "MEI LING ST",
                    topFont: "Arial-10",
        
                    serviceNumber: "64"
                    },
                'MACPHERSON RD',
                'JLN BESAR',
                'CLEMENCEAU AVE',
                'HAVELOCK RD, MRT',
                'ALEXANDRA ROAD'    
                ],
                scrollFont: "ArialBold-8:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "64",
                font: "LECIP-SMRTRear14:9",
                spacing: 2
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
