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
    destScroll2B: {
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
    4: {
        1: {
            front: {
                renderType: 'message',
                text: 'SMRT BUSES',
                font: 'Arial-17',
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "",
                topFont: "ArialNarrow-7",

                bottom: "",
                bottomFont: "ArialNarrow-7",
                bottomMargin: 2
            }
        }
    },
    5: {
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
    117: {
        1: {
            front: {
                renderType: "logo",
                text: "SMRT LOGO",
                image: "logo"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "ArialBold-8",
                spacing: 1
            },
        }
    },
    172: { // Done
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
                destination: "TUAS STH AVE 4",
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
                destination: "JOO KOON",
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
                spacing: 1
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
    2471: {
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
    2481: {
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
                destination: "TUAS",
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
    6651: {
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
    9611: {
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
    9612: {
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
    9613: {
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
                spacing: 1
            }
        }
    },
    9614: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961M",
                destination: "WDL TEMP INT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll2",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "KALLANG BAHRU",
                    bottomFont: "Calibri-7:2",
                    
                    serviceNumber: "961M"
                    },
                    {
                    renderType: "destScroll2",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "BEACH RD",
                    bottomFont: "Calibri-7:2",
                        
                    serviceNumber: "961M"
                    },
                    {
                    renderType: "destScroll2",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Calibri-7:2",
                            
                    serviceNumber: "961M"
                    },
                    {
                    renderType: "destScroll2",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "CHINATOWN",
                    bottomFont: "Calibri-7:2",
                                
                    serviceNumber: "961M"
                    },
                    {
                    renderType: "destScroll2",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "JLN BT MERAH",
                    bottomFont: "Calibri-7:2",
                                
                    serviceNumber: "961M"
                    },
                    {
                    renderType: "destScroll2",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "UPP BT TIMAH RD",
                    bottomFont: "Calibri-7:2",
                                
                    serviceNumber: "961M"
                    },
                    {
                    renderType: "destScroll2",
                    top: "WDL TEMP INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "WDL AVE 3",
                    bottomFont: "Calibri-7:2",
                                
                    serviceNumber: "961M"
                    },               
                ],
                scrollFont: "Calibri-7:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "961M",
                font: "Arial-10",
                spacing: 1
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
    9724: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972M",
                serviceFont: "Calibri-15",
                destination: "BT PANJANG INT",
                destinationFont: "ArialBold-8:2",
                scrolls: [
                    {
                    renderType: "destScroll2B",
                    top: "BT PANJANG INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "ORCHARD TURN",
                    bottomFont: "Calibri-7:2",
                
                    serviceNumber: "972M"
                    },
                    {
                    renderType: "destScroll2B",
                    top: "BT PANJANG INT via",
                    topFont: "ArialBold-8:2",
                    bottom: "SCOTTS RD",
                    bottomFont: "Calibri-7:2",
                    
                    serviceNumber: "972M"
                    },
                ],
                scrollFont: "Calibri-7"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972M",
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
                "BENCOOLEN ST, MRT",
                'CLEMENCEAU AVE',
                'HAVELOCK RD, MRT',
                "TIONG BAHRU RD",
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
