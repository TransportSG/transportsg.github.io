EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-GoAhead16:10",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text",
            font: "$destination.font",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-GoAhead16:10",
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
                    "$topFont === null": "Mobitec-7:5:1",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
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
                    "$bottomFont === null": "Mobitec-7:5:1",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
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
    destScroll2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-GoAhead16:10",
            spacing: 2
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
                    "$topFont === null": "Mobitec-7:5:1",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                bottom: "2"
                
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
                    "$bottomFont === null": "Mobitec-7:5:1",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
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
    destScroll3: { // New CDS/Express format (same as 43e) for some svc
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-GoAhead16:10",
            spacing: 2
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
                    "$topFont === null": "Mobitec-7:4:3",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
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
                    "$bottomFont === null": "Mobitec-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                bottom: "1",
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
    ImageScroll: {
        image: {
            align: "centre-x,centre-y",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$text"
        
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

EDSData.GASG = {
 
    21: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "Kampong Bahru",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "Kampong Bahru",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "Changi Village",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "Changi Village",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    24: {
        front: {
            renderType: "standardService",
            serviceNumber: "2B",
            destination: {
                text: "Bedok MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2B",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:7",
                    bottom: "BEDOK STN EXIT A",
                    bottomFont: "Mobitec-7:7",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    31: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "Tampines",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "Tampines",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    32: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    33: {
        front: {
            renderType: "standardService",
            serviceNumber: "3A",
            destination: {
                text: "Pasir Ris Drive 12",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3A",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS DR 12",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "3A",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:7",
                    bottom: "BLK 747A",
                    bottomFont: "Mobitec-7:7"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    61: {
        front: {
            renderType: "standardService",
            serviceNumber: "6",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "6",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    101: {
        front: {
            renderType: "standardService",
            serviceNumber: "10",
            destination: {
                text: "Kent Ridge",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "10",
                    top: "Kent Ridge",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    102: {
        front: {
            renderType: "standardService",
            serviceNumber: "10",
            destination: {
                text: "Tampines",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "10",
                    top: "Tampines",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    103: {
        front: {
            renderType: "standardService",
            serviceNumber: "10A",
            destination: {
                text: " ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "10A",
                    top: "TERMINATING AT",
                    bottom: " ",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    104: {
        front: {
            renderType: "standardService",
            serviceNumber: "10e",
            destination: {
                text: " ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "10e",
                    top: " ",
                    topFont: "Mobitec-7:5:2",
                    bottom: "  ",
                    bottomFont: "Mobitec-7:5:2",
                    image: "express",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    105: {
        front: {
            renderType: "standardService",
            serviceNumber: "10e",
            destination: {
                text: " ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "10e",
                    top: " ",
                    topFont: "Mobitec-7:5:2",
                    bottom: "  ",
                    bottomFont: "Mobitec-7:5:2",
                    image: "express",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    121: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "Kampong Bahru",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "Kampong Bahru",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    122: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    123: {
        front: {
            renderType: "standardService",
            serviceNumber: "12e",
            destination: {
                text: "Kampong Bahru",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12e",
                    top: "Kampong",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Bahru ",
                    bottomFont: "Mobitec-7:5:2",
                    image: "express",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    124: {
        front: {
            renderType: "standardService",
            serviceNumber: "12e",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12e",
                    top: "Pasir Ris",
                    image: "express",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    151: { // Done
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "Marine Parade",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "Marine Parade",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    152: { 
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    153: {
        front: {
            renderType: "standardService",
            serviceNumber: "15A",
            destination: {
                text: "Jalan Eunos",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15A",
                    top: "TERMINATING AT",
                    bottom: "JLN EUNOS",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "15A",
                    top: "TERMINATING AT",
                    bottom: "OPP EUNOS MRT",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    171: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "Bedok",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "Bedok",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    172: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    173: {
        front: {
            renderType: "standardService",
            serviceNumber: "17A",
            destination: {
                text: "Bedok North Ave 4",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17A",
                    top: "TERMINATING AT",
                    bottom: "BEDOK NORTH AVE 4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "17A",
                    top: "TERMINATING AT",
                    bottom: "SBST BEDOK NTH DEPOT",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    181: { // tba
        front: {
            renderType: "standardService",
            serviceNumber: "18",
            destination: {
                text: "Bedok North Ave 4",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "18",
                    top: " ",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    182: {
        front: {
            renderType: "standardService",
            serviceNumber: "18",
            destination: {
                text: "Tampines North",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "18",
                    top: "Tampines North",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    183: {
        front: {
            renderType: "standardService",
            serviceNumber: "18A",
            destination: {
                text: " ",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "18A",
                    top: "TERMINATING AT",
                    bottom: " ",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    184: { // tba
        front: {
            renderType: "standardService",
            serviceNumber: "18M",
            destination: {
                text: " ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "18M",
                    top: " ",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    185: {
        front: {
            renderType: "standardService",
            serviceNumber: "18M",
            destination: {
                text: " ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "18M",
                    top: " ",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    341: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "Changi Airport",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "Changi Airport ~",
                    topFont: "Mobitec-12:7"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    342: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "Punggol Coast",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "Punggol Coast",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    343: {
        front: {
            renderType: "standardService",
            serviceNumber: "34A",
            destination: {
                text: "Tampines Ave 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34A",
                    top: "TERMINATING AT",
                    bottom: "TAMPINES AVE 5",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "34A",
                    top: "TERMINATING AT",
                    bottom: "OPP OUR TAMPINES HUB",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    344: {
        front: {
            renderType: "standardService",
            serviceNumber: "34B",
            destination: {
                text: "Tampines Ave 5",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34B",
                    top: "TERMINATING AT",
                    bottom: "TAMPINES AVE 10",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "34B",
                    top: "TERMINATING AT",
                    bottom: "TAMPIINES WATER FAB PK",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    361: {
        front: {
            renderType: "standardService",
            serviceNumber: "36",
            destination: {
                text: "Tomlinson Rd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "Tomlinson Rd",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    362: {
        front: {
            renderType: "standardService",
            serviceNumber: "36",
            destination: {
                text: "Changi Airport",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "Changi Airport ~",
                    topFont: "Mobitec-12:7"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    363: {
        front: {
            renderType: "standardService",
            serviceNumber: "36A",
            destination: {
                text: "Tomlinson Rd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36A",
                    top: "TERMINATING AT",
                    bottom: "TOMLINSON RD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "36A",
                    top: "TERMINATING AT",
                    bottom: "AFT CUSCADEN RD",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    364: {
        front: {
            renderType: "standardService",
            serviceNumber: "36B",
            destination: {
                text: "Siglap Rd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36B",
                    top: "TERMINATING AT",
                    bottom: "SIGLAP RD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "36B",
                    top: "TERMINATING AT",
                    bottom: "BEF SEASIDE RESIDENCE",
                    bottomFont: "Mobitec-7:4"
                }, 
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    365: {
        front: {
            renderType: "standardService",
            serviceNumber: "36T",
            destination: {
                text: "Ends at Changi Airport T2",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36T",
                    top: "TERMINATING AT",
                    bottom: "CHANGI AIRPORT T2",
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    431: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "Upper East Coast",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "Upper East Coast",
                    topFont: "Mobitec-7:5:3"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    432: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    433: {
        front: {
            renderType: "standardService",
            serviceNumber: "43A",
            destination: {
                text: "Serangoon MRT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43A",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:4",
                    bottom: "S'GOON STN EXIT C/BLK 201",
                    bottomFont: "Hanover-7:3",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    434: {
        front: {
            renderType: "standardService",
            serviceNumber: "43e",
            destination: {
                text: "Marine Parade",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "Marine",
                    bottom: "Parade",
                    image: "express",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:5:2",
                    bottom: "MARINE PDE STN EXIT 4 ",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    435: {
        front: {
            renderType: "standardService",
            serviceNumber: "43e",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "Punggol",
                    topFont: "Mobitec-12:7",
                    image: "express",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    438: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "Serangoon MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "Serangoon MRT",
                    topFont: "Mobitec-12:7"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    439: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    441: {
        front: {
            renderType: "standardService",
            serviceNumber: "44",
            destination: {
                text: "Airport Blvd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "44",
                    top: "Airport Blvd",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    442: {
        front: {
            renderType: "standardService",
            serviceNumber: "44",
            destination: {
                text: "Punggol Coast",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "44",
                    top: "Punggol Coast",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    621: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "Sims Ave",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "Sims Ave",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    622: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    623: {
        front: {
            renderType: "standardService",
            serviceNumber: "62A",
            destination: {
                text: "Aljuned MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62A",
                    top: "TERMINATING AT",
                    bottom: "ALJUNIED MRT",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    681: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "Tampines",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "Tampines",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    682: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    683: {
        front: {
            renderType: "standardService",
            serviceNumber: "68A",
            destination: {
                text: "Ends at Tampines Int",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68A",
                    top: "TERMINATING AT",
                    bottom: "TAMPINES INT",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    684: {
        front: {
            renderType: "standardService",
            serviceNumber: "68B",
            destination: {
                text: "Tampines Ave 11",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68B",
                    top: "TERMINATING AT",
                    bottom: "TAMPINES AVE 11",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "68B",
                    top: "TERMINATING AT",
                    bottom: "REEBONZ BLDG",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    821: {
        front: {
            renderType: "standardService",
            serviceNumber: "82",
            destination: {
                text: "Serangoon MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "Serangoon MRT",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    822: {
        front: {
            renderType: "standardService",
            serviceNumber: "82",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    831: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "Sengkang",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83",
                    top: "Sengkang",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    832: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    833: {
        front: {
            renderType: "standardService",
            serviceNumber: "83T",
            destination: {
                text: "Ends at Sengkang Int",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83T",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Mobitec-7:7",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    841: {
        front: {
            renderType: "standardService",
            serviceNumber: "84G",
            destination: {
                text: "Punggol via Sentul Cres",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "84G",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "84G",
                    top: "via Sentul Cres",
                    topFont: "Mobitec-12:7"
                },
            ],
            scrollFont: "Hanover-7:3:2"
        }
    },
    842: {
        front: {
            renderType: "standardService",
            serviceNumber: "84W",
            destination: {
                text: "Punggol via SIT Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "84W",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "84W",
                    top: "via SIT Punggol",
                    topFont: "Mobitec-12:7"
                },
            ],
            scrollFont: "Hanover-7:3:2"
        }
    },
    851: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "Yishun",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "Yishun",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    852: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    853: {
        front: {
            renderType: "standardService",
            serviceNumber: "85A",
            destination: {
                text: "Sengkang East Rd",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "85A",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:5:2",
                    bottom: "SENGKANG EAST RD",
                    bottomFont: "Mobitec-7:5:2",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "85A",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:5:2",
                    bottom: "SENGKANG COMMUNITY HUB ",
                    bottomFont: "Mobitec-7:4:3"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1111: {
        front: {
            renderType: "destScroll",
            top: "Sorry!",
            topFont: "Mobitec-7:7",

            bottom: "Not In Service",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    1041: {
        front: {
            renderType: "standardService",
            serviceNumber: "104",
            destination: {
                text: "Woodleigh",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "104",
                    top: "Woodleigh",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1042: {
        front: {
            renderType: "standardService",
            serviceNumber: "104",
            destination: {
                text: "Punggol Coast",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "104",
                    top: "Punggol Coast",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1181: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "Changi Business Park",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118",
                    top: "Changi Business Park",
                    topFont: "Mobitec-7:5:3"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1182: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1183: {
        front: {
            renderType: "standardService",
            serviceNumber: "118A",
            destination: {
                text: "Simei Ave",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118A",
                    top: "TERMINATING AT",
                    bottom: "SIMEI AVE"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "118A",
                    top: "TERMINATING AT",
                    bottom: "ITE COLL EAST ADM BLK",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1184: {
        front: {
            renderType: "standardService",
            serviceNumber: "118B",
            destination: {
                text: "TPE (Punggol Rd)",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118B",
                    top: "TERMINATING AT",
                    bottom: "TPE (BEF PUNGGOL RD)",
                    bottomFont: "Mobitec-7:4",

                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1191: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "Kovan",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "119",
                    top: "Kovan",
                    topFont: "Mobitec-13:8"
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1192: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "119",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1361: { 
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "Ang Mo Kio",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "Ang Mo Kio",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1362: { 
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    2221: { 
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Welcome Page",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "June 2025",
                    topFont: "Mobitec-7:4",
                    bottom: "version",
                    bottomFont: "Mobitec-7:4",
                    image: "GASG Logo Full"
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    2222: {
        front: {
            renderType: "ImageScroll",
            image: "GASG Logo Full",
            text: "Go-Ahead Logo"
        }
    },
    2223: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: " Welcome to",
            topFont: "Mobitec-7:4",
            bottom: " Loyang Depot",
            bottomFont: "Mobitec-7:4",
            image: "GASG Logo Full",
        }
    },
    3333: {
        front: {
            renderType: 'message',
            text: 'On Charter',
            font: 'Mobitec-13:8',
        }
    },
    3541: {
        front: {
            renderType: "standardService",
            serviceNumber: "354",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "354",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3581: {
        front: {
            renderType: "standardService",
            serviceNumber: "358",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3582: {
        front: {
            renderType: "standardService",
            serviceNumber: "358T",
            destination: {
                text: "Ends at Pasir Ris Int",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "358T",
                    top: "TERMINATING AT",
                    bottom: "PASIR RIS INT",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3591: {
        front: {
            renderType: "standardService",
            serviceNumber: "359",
            destination: {
                text: "Pasir Ris Int",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3592: {
        front: {
            renderType: "standardService",
            serviceNumber: "359T",
            destination: {
                text: "Ends at Pasir Ris Int",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "359T",
                    top: "TERMINATING AT",
                    bottom: "PASIR RIS INT",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3811: {
        front: {
            renderType: "standardService",
            serviceNumber: "381",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "381",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3821: {
        front: {
            renderType: "standardService",
            serviceNumber: "382G",
            destination: {
                text: "Punggol Int via Sumang Lane",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "382G",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "382G",
                    top: "via Sumang Lane",
                    topFont: "Mobitec-7:5:1",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3822: {
        front: {
            renderType: "standardService",
            serviceNumber: "382W",
            destination: {
                text: "Punggol Int via Sentul Cres",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "382W",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "382W",
                    top: "via Sentul Cres",
                    topFont: "Mobitec-7:5:1",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3823: {
        front: {
            renderType: "standardService",
            serviceNumber: "382A",
            destination: {
                text: "Sumang Lane",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "382A",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:5:2",
                    bottom: "SUMANG LANE",
                    bottomFont: "Mobitec-7:5:2",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "382A",
                    top: "TERMINATING AT",
                    topFont: "Mobitec-7:5:2",
                    bottom: "BLK 226A",
                    bottomFont: "Mobitec-7:5:2"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3841: {
        front: {
            renderType: "standardService",
            serviceNumber: "384",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "384",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3861: {
        front: {
            renderType: "standardService",
            serviceNumber: "386",
            destination: {
                text: "Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "386",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3862: {
        front: {
            renderType: "standardService",
            serviceNumber: "386A",
            destination: {
                text: "Edgedale Plains",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "386A",
                    top: "TERMINATING AT",
                    bottom: "EDGEDALE PLAINS",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "386A",
                    top: "TERMINATING AT",
                    bottom: "BLK 682A",
                    bottomFont: "Mobitec-7:5:2"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4031: {
        front: {
            renderType: "standardService",
            serviceNumber: "403",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "403",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4444: {
        front: {
            renderType: 'message',
            text: 'On Test',
            font: 'Mobitec-13:8',
        }
    },
    4591: {
        front: {
            renderType: "standardService",
            serviceNumber: "459",
            destination: {
                text: "Tai Seng MRT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "459",
                    top: "Tai Seng MRT",
                    topFont: "Mobitec-13:8"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4592: {
        front: {
            renderType: "standardService",
            serviceNumber: "459",
            destination: {
                text: "Punggol MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "459",
                    top: "Punggol MRT",
                    topFont: "Mobitec-13:8"
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5181: {
        front: {
            renderType: "standardService",
            serviceNumber: "518",
            destination: {
                text: "Bayfront",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "Bayfront",
                    image: "express",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5182: {
        front: {
            renderType: "standardService",
            serviceNumber: "518",
            destination: {
                text: "Pasir Ris",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "Pasir Ris",
                    image: "express",
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5183: {
        front: {
            renderType: "standardService",
            serviceNumber: "518A",
            destination: {
                text: "Bayfront",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518A",
                    top: "ENDS AT",
                    topFont: "Mobitec-7:4",
                    bottom: "BAYFRONT",
                    bottomFont: "Mobitec-7:4",
                    image: "express",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "518A",
                    top: "SKIPS",
                    topFont: "Mobitec-7:4",
                    bottom: "TAMPINES",
                    bottomFont: "Mobitec-7:4",
                    image: "express",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5555: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Training Bus",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "L",
                    top: "Training Bus",
                    topFont: "Mobitec-13:8",
                    image: "L-Plate",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6611: {
        front: {
            renderType: "standardService",
            serviceNumber: "661",
            destination: {
                text: "Marina Blvd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "661",
                    top: "Marina",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Boulevard",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6612: {
        front: {
            renderType: "standardService",
            serviceNumber: "661",
            destination: {
                text: "Pasir Ris Drive 3",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "661",
                    top: "Pasir Ris",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Drive 3",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6661: { // TO make scroll fonts
        front: {
            renderType: "standardService",
            serviceNumber: "666",
            destination: {
                text: "Temasek Blvd",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "666",
                    top: "Temasek",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Boulevard",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },

            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6662: { 
        front: {
            renderType: "standardService",
            serviceNumber: "666",
            destination: {
                text: "Damai LRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "666",
                    top: "Damai",
                    topFont: "Mobitec-7:7",
                    bottom: "LRT",
                    bottomFont: "Mobitec-7:7",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6666: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Driver Training",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll2",
                    serviceNumber: "x",
                    top: "Driver Training",
                    topFont: "Mobitec-12:7",
                    image: "GASG Logo Lion Head",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6731: {
        front: {
            renderType: "standardService",
            serviceNumber: "673",
            destination: {
                text: "Temasek Blvd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "673",
                    top: "Temasek",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Boulevard",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6732: { // TO make scroll fonts
        front: {
            renderType: "standardService",
            serviceNumber: "673",
            destination: {
                text: "Punggol Point",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "673",
                    top: "Punggol",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Point LRT",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6781: {
        front: {
            renderType: "standardService",
            serviceNumber: "678",
            destination: {
                text: "Temasek Blvd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "678",
                    top: "Temasek",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Boulevard",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6782: {
        front: {
            renderType: "standardService",
            serviceNumber: "678",
            destination: {
                text: "Punggol Central",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "678",
                    top: "Punggol",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Central",
                    bottomFont: "Mobitec-7:5:2",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6831: {
        front: {
            renderType: "standardService",
            serviceNumber: "683",
            destination: {
                text: "Moulmein Rd",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "683",
                    top: "Moulmein",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Road",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6832: {
        front: {
            renderType: "standardService",
            serviceNumber: "683",
            destination: {
                text: "Punggol Central",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "683",
                    top: "Punggol",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Central",
                    bottomFont: "Mobitec-7:5:2",
                    image: "CityDirect",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    64000: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Format Test",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "832",
                    top: "Woodlands",
                    topFont: "Mobitec-13:8"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "999",
                    top: "LOYANG DEPOT",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL COAST INT",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    9998: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "Bus Under",
            topFont: "Mobitec-7:7",
            bottom: "Maintenance",
            bottomFont: "Mobitec-7:7",
            image: "breakdown",
        }
    },
    
    9999: {
        front: {
            renderType: "ImageScroll",
            image: "ManLionCity",
            text: "MAN Lion's City"
        }
    },
}

EDSExtras.GASG = {    
1: {
    front: {
        renderType: "destScroll",
        top: "Last Bus",
        topFont: "Mobitec-13:8",

        serviceNumber: ""
    }
},
}

EDSImages.GASG = {
"blank": [
     [0]
],
'cny-orange': [
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
'breakdown': [
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    ],
    'L-Plate': [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    'CityDirect': [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1],
    ],
    'express': [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    'ManLionCity': [
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0],
    [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0],
    [1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0],
    [1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    'GASG Logo Full': [
    [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0], 
    [1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0], 
    [1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1], 
    [0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1], 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0], 
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1], 
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0], 
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0], 
    [0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0], 
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    ],
    'GASG Logo Lion Head': [
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,0,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,0,0,1,1,1,0,1,1,0,0,1,0],
    [0,1,0,1,0,1,1,1,0,1,1,1,1,1,1],
    [1,1,0,1,0,0,1,1,0,0,1,1,1,1,1],
    [1,0,0,1,0,0,0,1,1,0,1,1,1,1,0],
    [1,0,1,1,0,0,0,0,1,0,0,1,1,1,1],
    [0,0,1,1,0,0,0,0,1,1,0,0,1,1,0],
    [0,0,1,1,0,0,0,0,1,1,1,0,0,0,0],
    [0,0,1,1,0,1,0,0,1,0,1,1,0,0,0],
    [0,0,0,1,1,0,1,0,0,0,0,1,1,0,0],
    [0,0,0,0,1,1,0,1,1,0,0,0,1,1,0],
    [0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],

    ],    
}
