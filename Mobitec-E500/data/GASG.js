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
                text: "KAMPONG BAHRU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "Kampong Bahru",
                    topFont: "Mobitec-13:8"
                },
                "LOYANG AVE / WAY",
                "UPPER CHANGI RD / MRT",
                "TANAH MERAH MRT",
                "BEDOK MRT",
                "GEYLANG RD",
                "LAVENDER MRT",
                "VICTORIA ST / BUGIS",
                "CLARKE QUAY",
                "CHINATOWN",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "CHANGI VILLAGE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "Changi Village",
                    topFont: "Mobitec-13:8"
                },
                "CHINATOWN",
                "CLARKE QUAY",
                "BUGIS / VICTORIA ST",
                "LAVENDER MRT",
                "KALLANG MRT",
                "NEW UPPER CHANGI RD",
                "BEDOK MRT",
                "TANAH MERAH MRT",
                "UPPER CHANGI MRT / RD",                
                "LOYANG WAY / AVE",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    23: {
        front: {
            renderType: "standardService",
            serviceNumber: "2A",
            destination: {
                text: "TANAH MERAH MRT",
                font: "Mobitec-7:5:1"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2A",
                    top: "TERMINATING AT",
                    bottom: "NEW UPPER CHANGI RD",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "2A",
                    top: "TERMINATING AT",
                    bottom: "TANAH MERAH MRT",
                },
                "CHINATOWN",
                "VICTORIA ST",
                "KALLANG RD",
                "SIMS AVE",
                "SIMS AVE EAST",
                "NEW UPP CHANGI RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    24: {
        front: {
            renderType: "standardService",
            serviceNumber: "2B",
            destination: {
                text: "BEDOK MRT",
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
                text: "TAMPINES",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "Tampines",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL CENTRAL / FIELD",
                "TAMPINES EXPRESSWAY",
                "PASIR RIS DR 12 / 1 / 10",
                "PASIR RIS ST 71",
                "PASIR RIS INT",
                "PASIR RIS DR 3 / ST 21",
                "TAMPINES EAST MRT",
                "TAMPINES ST 21"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    32: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "TAMPINES ST 21",
                "TAMPINES EAST MRT",
                "PASIR RIS ST 21 / DR 3",
                "PASIR RIS ST 71",
                "PASIR RIS DR 10 / 1 / 12", 
                "TAMPINES EXPRESSWAY",
                "PUNGGOL FIELD / CENTRAL"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    33: {
        front: {
            renderType: "standardService",
            serviceNumber: "3A",
            destination: {
                text: "PASIR RIS DR 12",
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
    34: {
        front: {
            renderType: "standardService",
            serviceNumber: "3B",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3B",
                    top: "TERMINATING AT",
                    bottom: "PASIR RIS INT",
                },
                "PASIR RIS DR 1",
                "PASIR RIS DR 10",
                "PASIR RIS ST 71",
                "ELIAS RD",
                "PASIR RIS DR 8",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    61: {
        front: {
            renderType: "standardService",
            serviceNumber: "6",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "6",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "PASIR RIS DR 3",
                "LOYANG AVE",
                "LOYANG WAY",
                "LOYANG CRES (LOOP)"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    121: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "Kampong Bahru",
                    topFont: "Mobitec-13:8"
                },
                "PASIR RIS DR 6 / 1",
                "PASIR RIS ST 12 / 11",
                "TAMPINES EAST MRT",
                "SIMEI RD",
                "TANAH MERAH MRT",
                "BEDOK SOUTH RD",
                "EAST COAST RD",
                "MOUNTBATTEN RD / MRT",
                "LAVENDER MRT",
                "VICTORIA ST / BUGIS",
                "CLARKE QUAY",
                "CHINATOWN"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    122: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "CHINATOWN / CLARKE QUAY MRT",
                "VICTORIA ST / BUGIS",
                "LAVENDER / KALLANG MRT",
                "MOUNTBATTEN RD / MRT",
                "EAST COAST RD",
                "BEDOK SOUTH RD",
                "TANAH MERAH MRT",
                "SIMEI RD",
                "TAMPINES EAST MRT",
                "PASIR RIS ST 12 / 11",
                "PASIR RIS DR 1 / 6"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    123: {
        front: {
            renderType: "standardService",
            serviceNumber: "12e",
            destination: {
                text: "KAMPONG BAHRU",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PASIR RIS DR 3 / 1",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PASIR RIS ST 12 / 11",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "TAMPINES AVE 7 / 2",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "SIMEI RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "BEDOK SOUTH RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "ECP (EXPRESS)",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "BUGIS",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-7:5:1",
                    bottom: "CHINATOWN",
                    bottomFont: "Mobitec-7:4",
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
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12e",
                    top: "Pasir Ris",
                    image: "express",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "CHINATOWN",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "BUGIS",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "ECP (EXPRESS)",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "BEDOK SOUTH RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "SIMEI RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "TAMPINES AVE 2 / 7",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS ST 11 / 12",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`12e",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS DR 1 / 6",
                    bottomFont: "Mobitec-7:4",
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
                text: "MARINE PARADE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "Marine Parade",
                    topFont: "Mobitec-13:8"
                },
                "PASIR RIS ST 52", 
                "PASIR RIS DR 1 / 8",
                "TAMPINES AVE 12 / 7 / 4",
                "TAMPINES AVE 5 / 1",
                "TAMPINES WEST MRT",
                "KAKI BUKIT AVE 1 / MRT",
                "JALAN EUNOS / MRT",
                "STILL RD",
                "JOO CHIAT PLACE",
                "TELOK KURAU RD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    152: { 
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "TELOK KURAU RD",
                "JOO CHIAT PLACE",
                "STILL RD",
                "JALAN EUNOS / MRT",
                "KAKI BUKIT AVE 1 / MRT",
                "TAMPINES WEST MRT",
                "TAMPINES AVE 1 / 5",
                "TAMPINES AVE 4 / 7 / 12",
                "PASIR RIS DR 8 / 1",
                "PASIR RIS ST 52"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    153: {
        front: {
            renderType: "standardService",
            serviceNumber: "15A",
            destination: {
                text: "JLN EUNOS",
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
                "PASIR RIS ST 52",
                "PASIR RIS DR 1 / 8",
                "TAMPINES AVE 12 / 7 / 4",
                "TAMPINES 5 / 1",
                "TAMPINES WEST MRT",
                "KAKI BUKIT AVE 1 / MRT",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    171: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "BEDOK",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "Bedok",
                    topFont: "Mobitec-13:8"
                },
                "PASIR RIS DR 3 / 4",
                "PASIR RIS ST 12 / 11",
                "TAMPINES AVE 7 / 2",
                "TAMPINES EAST MRT",
                "SIMEI AVE",
                "BEDOK NORTH AVE 4",
                "BEDOK NORTH RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    172: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "BEDOK NORTH RD",
                "BEDOK NORTH AVE 4",
                "SIMEI AVE",
                "TAMPINES EAST MRT",
                "TAMPINES AVE 2 / 7",
                "PASIR RIS ST 11 / 12",
                "PASIR RIS DR 4 / 3",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    173: {
        front: {
            renderType: "standardService",
            serviceNumber: "17A",
            destination: {
                text: "BEDOK NORTH AVE 4",
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
                "BEDOK NORTH AVE 1",
                "BEDOK NORTH RD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    341: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "Changi Airport ~",
                    topFont: "Mobitec-12:7"
                },
                "PUNGGOL RD",
                "TPE",
                "TAMPINES AVE 10 / 5",
                "TAMPINES AVE 2 / 7",
                "TAMPINES EAST MRT",
                "TERMINAL 3 / 1 / 2 / 4"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    342: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "TAMPINES EAST MRT",
                "TAMPINES AVE 7 / 2",
                "TAMPINES AVE 5 / 10",
                "TPE",
                "PUNGGOL RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    343: {
        front: {
            renderType: "standardService",
            serviceNumber: "34A",
            destination: {
                text: "TAMPINES AVE 5",
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
                "PUNGGOL RD",
                "TPE",
                "TAMPINES AVE 10",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    344: {
        front: {
            renderType: "standardService",
            serviceNumber: "34B",
            destination: {
                text: "TAMPINES AVE 10",
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
                "TAMPINES AVE 5 / 2 / 7",
                "CHANGI AIRPORT",
                "TAMPINES AVE 7 / 2 / 5",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    361: {
        front: {
            renderType: "standardService",
            serviceNumber: "36",
            destination: {
                text: "TOMLINSON RD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "Tomlinson Rd",
                    topFont: "Mobitec-13:8"
                },
                "MARINE PARADE RD",
                "SUNTEC CITY",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "SOMERSET MRT",
                "ORCHARD BOULEVARD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    362: {
        front: {
            renderType: "standardService",
            serviceNumber: "36",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "Changi Airport ~",
                    topFont: "Mobitec-12:7"
                },
                "ORCHARD RD",
                "BRAS BASAH RD",
                "PROMENADE MRT", // Fomerly Suntec City
                "MARINE PARADE RD",
                "TERMINAL 3 / 1 / 2 / 4"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    363: {
        front: {
            renderType: "standardService",
            serviceNumber: "36A",
            destination: {
                text: "TOMLINSON RD",
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
                    bottom: "AFT CAUSCADEN RD",
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
                text: "SIGLAP RD",
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
                text: "CHANGI AIRPORT T2",
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
                text: "UPPER EAST COAST",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "Upper East Coast",
                    topFont: "Mobitec-7:5:3"
                },
                "PUNGGOL WAY",
                "SENGKANG EAST RD",
                "BUANGKOK MRT",
                "BUANGKOK GREEN",
                "YIO CHU KANG RD",
                "SERANGOON MRT",
                "UPPER PAYA LEBAR RD",
                "TAI SENG MRT",
                "MACPHERSON MRT",
                "PAYA LEBAR RD / MRT",
                "TANJONG KATONG RD",
                "MARINE PARADE RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    432: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "MARINE PARADE RD",
                "TANJONG KATONG RD",
                "PAYA LEBAR MRT / RD",
                "MACPHERSON MRT",
                "TAI SENG MRT",
                "UPPER PAYA LEBAR RD",
                "SERANGOON MRT",
                "YIO CHU KANG RD",
                "BUANGKOK GREEN",
                "BUANGKOK MRT",
                "SENGKANG EAST RD",
                "PUNGGOL WAY"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    433: {
        front: {
            renderType: "standardService",
            serviceNumber: "43e",
            destination: {
                text: "MARINE PARADE",
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
                {
                    renderType: "destScroll3",
                    serviceNumber: "`43e",
                    top: "MARINE PDE MRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "PUNGGOL WAY",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll3",
                    serviceNumber: "`43e",
                    top: "MARINE PDE MRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "SENGKANG EAST RD",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll3",
                    serviceNumber: "`43e",
                    top: "MARINE PDE MRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "BUANGKOK MRT",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll3",
                    serviceNumber: "`43e",
                    top: "MARINE PDE MRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "AIRPORT RD",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll3",
                    serviceNumber: "`43e",
                    top: "MARINE PDE MRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "MACPHERSON MRT",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll3",
                    serviceNumber: "`43e",
                    top: "MARINE PDE MRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "PAYA LEBAR RD",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll3",
                    serviceNumber: "`43e",
                    top: "MARINE PDE MRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "TG KATONG RD",
                    bottomFont: "Mobitec-5:3",
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
                text: "PUNGGOL",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "`43e",
                    top: "PUNGGOL",
                    topFont: "Mobitec-7:7",
                    bottom: "TANJONG KATONG RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`43e",
                    top: "PUNGGOL",
                    topFont: "Mobitec-7:7",
                    bottom: "PAYA LEBAR RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`43e",
                    top: "PUNGGOL",
                    topFont: "Mobitec-7:7",
                    bottom: "KPE (EXPRESS)",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`43e",
                    top: "PUNGGOL",
                    topFont: "Mobitec-7:7",
                    bottom: "BUANGKOK MRT",
                    bottomFont: "Mobitec-7:4",
                },                {
                    renderType: "destScroll",
                    serviceNumber: "`43e",
                    top: "PUNGGOL",
                    topFont: "Mobitec-7:7",
                    bottom: "SENGKANG EAST RD",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    435: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "SERANGOON MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "Serangoon MRT",
                    topFont: "Mobitec-12:7"
                },
                "PUNGGOL WAY",
                "SENGKANG EAST RD",
                "BUANGKOK MRT",
                "BUANGKOK GREEN",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    436: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "YIO CHU KANG RD",
                "BUANGKOK GREEN",
                "BUANGKOK MRT",
                "SENGKANG EAST RD",
                "PUNGGOL WAY"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    621: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "SIMS AVE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "Sims Ave",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL FIELD / EAST",
                "SENGKANG EAST DR",
                "UPPER SERANGOON RD",
                "HOUGANG AVE 8 / 10",
                "HOUGANG MRT",
                "LORONG AH SOO",
                "UPPER PAYA LEBAR RD",
                "MACPHERSON RD",
                "ALJUNIED MRT",
                "GEYLANG RD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    622: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "ALJUNIED MRT",
                "MACPHERSON RD",
                "UPPER PAYA LEBAR RD",
                "LORONG AH SOO",
                "HOUGANG AVE 3",
                "HOUGANG MRT",
                "HOUGANG AVE 10 / 8",
                "UPPER SERANGOON RD",
                "SENGKANG EAST DR",
                "PUNGGOL EAST / FIELD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    623: {
        front: {
            renderType: "standardService",
            serviceNumber: "62A",
            destination: {
                text: "ALJUNIED MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62A",
                    top: "TERMINATING AT",
                    bottom: "ALJUNIED MRT",
                },
                "PUNGGOL FIELD",
                "SENGKANG EAST DR",
                "HOUGANG AVE 8 / 6 / 10",
                "HOUGANG AVE 3 / 1",
                "LORONG AH SOO",
                "UPPER PAYA LEBAR RD",
                "MACPHERSON RD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    681: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "Tampines",
                    topFont: "Mobitec-13:8"
                },
                "ELIAS RD",
                "PASIR RIS ST 71",
                "TAMPINES AVE 10",
                "TAMPINES AVE 11",
                "TAMPINES AVE 6",
                "TAMPINES CONCOURSE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    682: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 6",
                "TAMPINES AVE 11",
                "TAMPINES AVE 10",
                "PASIR RIS ST 71",
                "ELIAS RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    683: {
        front: {
            renderType: "standardService",
            serviceNumber: "68A",
            destination: {
                text: "TAMPINES INT",
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
                text: "TAMPINES AVE 11",
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
                text: "SERANGOON MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "Serangoon MRT",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL RD", 
                "HOUGANG AVE 10", 
                "HOUGANG AVE 2", 
                "UPPER SERANGOON RD", 
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    822: {
        front: {
            renderType: "standardService",
            serviceNumber: "82",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "UPPER SERANGOON RD",
                "HOUGANG AVE 2",
                "HOUGANG AVE 10",
                "PUNGGOL RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    831: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "SENGKANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83",
                    top: "Sengkang",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL CENTRAL",
                "PUNGGOL WAY",
                "PUNGGOL FIELD",
                "PUNGGOL RD",
                "SENGKANG EAST RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    832: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "SENGKANG EAST RD",
                "PUNGGOL RD",
                "PUNGGOL FIELD",
                "PUNGGOL WAY",
                "PUNGGOL CENTRAL"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    833: {
        front: {
            renderType: "standardService",
            serviceNumber: "83T",
            destination: {
                text: "ENDS AT SENGKANG INT",
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
                    renderType: "destScroll2",
                    serviceNumber: "84G",
                    top: "via Sentul Cres",
                    topFont: "Mobitec-12:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "84G",
                    top: "PUNGGOL",
                    topFont: "Mobitec-7:7",
                    bottom: "NIBONG > NORTHSHORE > SIT",
                    bottomFont: "Hanover-7:3:2"
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
                    renderType: "destScroll2",
                    serviceNumber: "84W",
                    top: "via SIT Punggol",
                    topFont: "Mobitec-12:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "84W",
                    top: "PUNGGOL",
                    topFont: "Mobitec-7:7",
                    bottom: "SIT > NORTHSHORE > NIBONG",
                    bottomFont: "Hanover-7:3:2"
                },
            ],
            scrollFont: "Hanover-7:3:2"
        }
    },
    843: {
        front: {
            renderType: "standardService",
            serviceNumber: "84A",
            destination: {
                text: "Punggol Coast Stn via SIT Punggol",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "84A",
                    top: "TERMINATING AT",
                    bottom: "NEW PUNGGOL RD",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "84A",
                    top: "TERMINATING AT",
                    bottom: "PUNGGOL COAST STN",
                },
                {
                    renderType: "destScroll2",
                    serviceNumber: "84A",
                    top: "via SIT Punggol",
                    topFont: "Mobitec-12:7"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    849: {
        front: {
            renderType: "standardService",
            serviceNumber: "84",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "84",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "SENTUL CRESCENT",
                "PUNGGOL WAY",
                "NORTHSHORE DRIVE",
                "NEW PUNGGOL RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    851: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "Yishun",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL CENTRAL",
                "RIVERVALE DR",
                "COMPASSVALE DR",
                "SENGKANG EAST RD / WAY",
                "SENGKANG WEST WAY",
                "JALAN KAYU",
                "SLE",
                "KHATIB MRT"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    852: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "KHATIB MRT",
                "SLE",
                "JALAN KAYU",
                "SENGKANG WEST WAY",
                "SENGKANG EAST WAY / RD",
                "COMPASSVALE DR",
                "RIVERVALE DR",
                "PUNGGOL CENTRAL"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    853: {
        front: {
            renderType: "standardService",
            serviceNumber: "85A",
            destination: {
                text: "SENGKANG EAST RD",
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
                "YISHUN AVE 2",
                "JALAN KAYU",
                "SENGKANG WEST WAY",
                "SENGKANG EAST WAY"
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
    1181: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "CHANGI BUSINESS PARK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118",
                    top: "Changi Business Park",
                    topFont: "Mobitec-7:5:3"
                },
                "PUNGGOL WAY",
                "TPE",
                "TAMPINES AVE 10 / 8 / 1",
                "SIMEI AVE",
                "XILIN AVE",
                "EXPO MRT",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1182: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "EXPO MRT",
                "XILIN AVE",
                "SIMEI AVE",
                "TAMPINES WEST MRT",
                "TAMPINES AVE 1 / 8 / 10",
                "TPE",
                "PUNGGOL WAY"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1183: {
        front: {
            renderType: "standardService",
            serviceNumber: "118A",
            destination: {
                text: "SIMEI AVE",
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
                "TAMPINES AVE 10",
                "TAMPINES AVE 8 / 1",
                "TAMPINES WEST MRT",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1184: {
        front: {
            renderType: "standardService",
            serviceNumber: "118B",
            destination: {
                text: "TPE (PUNGGOL RD)",
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
                "TAMPINES WEST MRT",
                "TAMPINES AVE 1 / 8 / 10",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1191: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "KOVAN",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "119",
                    top: "Kovan",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL FIELD / WAY",
                "SENGKANG MRT",
                "RIVERVALE DRIVE",
                "PUNGGOL RD",
                "HOUGANG AVE 10 / 8",
                "UPPER SERANGOON RD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1192: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "119",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "UPPER SERANGOON RD",
                "HOUGANG AVE 8 / 10",
                "PUNGGOL RD",
                "RIVERVALE DRIVE",
                "SENGKANG MRT",
                "PUNGGOL WAY / FIELD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1361: { 
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "ANG MO KIO",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "Ang Mo Kio",
                    topFont: "Mobitec-13:8"
                },
                "EDGEFIELD PLAINS",
                "PUNGGOL RD",
                "RIVERVALE DRIVE",
                "UPPER SERANGOON RD",
                "KOVAN MRT",
                "YIO CHU KANG RD",
                "SERANGOON GARDENS",
                "ANG MO KIO AVE 1 / 6",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1362: { 
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "ANG MO KIO AVE 1 / 6",
                "SERANGOON GARDENS",
                "YIO CHU KANG RD",
                "KOVAN MRT",
                "UPPER SERANGOON RD",
                "RIVERVALE DRIVE",
                "PUNGGOL RD",
                "EDGEFIELD PLAINS",
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
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "354",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "DOWNTOWN EAST",
                "JALAN LOYANG BESAR",
                "PASIR RIS DR 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3581: {
        front: {
            renderType: "standardService",
            serviceNumber: "358",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "PASIR RIS DR 3 / 10",
                "ELIAS RD",
                "PASIR RIS DR 3 / 6",
                "PASIR RIS DR 1 / 4",
                "PASIR RIS ST 41"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3582: {
        front: {
            renderType: "standardService",
            serviceNumber: "358T",
            destination: {
                text: "ENDS AT PASIR RIS INT",
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
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "PASIR RIS DR 3 / 12",
                "PASIR RIS ST 71",
                "PASIR RIS DR 12 / 3",
                "PASIR RIS ST 51",
                "PASIR RIS DR 11, ST 11",
                "LOYANG AVE",
                "PASIR RIS DR 3 / 2"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3592: {
        front: {
            renderType: "standardService",
            serviceNumber: "359T",
            destination: {
                text: "ENDS AT PASIR RIS INT",
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
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "381",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL WAY",
                "PUNGGOL CENTRAL / MRT",
                "EDGEFIELD PLAINS",
                "PUNGGOL FIELD / EAST",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3821: {
        front: {
            renderType: "standardService",
            serviceNumber: "382G",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "382G",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL FIELD",
                "SUMANG WALK",
                "SUMANG LINK",
                "SENTUL CRESCENT",
                "PUNGGOL PLACE",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3822: {
        front: {
            renderType: "standardService",
            serviceNumber: "382W",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "382W",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL PLACE",
                "SENTUL CRESCENT",
                "SUMANG LINK",
                "SUMANG WALK",
                "PUNGGOL FIELD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3823: {
        front: {
            renderType: "standardService",
            serviceNumber: "382A",
            destination: {
                text: "SUMANG LANE",
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
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "384",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL CENTRAL",
                "PUNGGOL WAY",
                "NORTHSHORE DRIVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3861: {
        front: {
            renderType: "standardService",
            serviceNumber: "386",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "386",
                    top: "Punggol",
                    topFont: "Mobitec-13:8"
                },
                "PUNGGOL CENTRAL",
                "EDGEFIELD PLAINS",
                "PUNGGOL FIELD",
                "PUNGGOL EAST"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3862: {
        front: {
            renderType: "standardService",
            serviceNumber: "386A",
            destination: {
                text: "EDGEDALE PLAINS",
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
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "403",
                    top: "Pasir Ris",
                    topFont: "Mobitec-13:8"
                },
                "PASIR RIS DR 8 / 1",
                "ELIAS RD",
                "PASIR RIS RD",
                "PASIR RIS PARK"
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
    5181: {
        front: {
            renderType: "standardService",
            serviceNumber: "518",
            destination: {
                text: "BAYFRONT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "Bayfront",
                    image: "express",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS DR 3 / 1",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "TAMPINES AVE 7",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "TAMPINES AVE 2 / 1",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "BEDOK NORTH MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "NEWTON MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "ORCHARD RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "SUNTEC CITY",
                    bottomFont: "Mobitec-7:4",
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
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "Pasir Ris",
                    image: "express",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "NEWTON MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "ORCHARD RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "SUNTEC CITY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "BEDOK NORTH MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "TAMPINES AVE 1 / 2",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "TAMPINES AVE 7",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518",
                    top: "PASIR RIS",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS DR 1 / 3",
                    bottomFont: "Mobitec-7:4",
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
                text: "BAYFRONT",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "`518A",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS DR 3/1",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518A",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "LOYANG AVE",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518A",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "NEWTON MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518A",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "ORCHARD RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "`518A",
                    top: "BAYFRONT",
                    topFont: "Mobitec-7:7",
                    bottom: "PROMENADE MRT",
                    bottomFont: "Mobitec-7:4",
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
                text: "MARINA BLVD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~661",
                    top: "MARINA BLVD",
                    topFont: "Mobitec-7:7",
                    bottom: "ANSON RD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~661",
                    top: "MARINA BLVD",
                    topFont: "Mobitec-7:7",
                    bottom: "ROBINSON RD",
                    bottomFont: "Mobitec-7:4",
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
                text: "PASIR RIS DR 3",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~661",
                    top: "PASIR RIS DR 3",
                    topFont: "Mobitec-7:7",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~661",
                    top: "PASIR RIS DR 3",
                    topFont: "Mobitec-7:7",
                    bottom: "LOYANG AVE",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~661",
                    top: "PASIR RIS DR 3",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS ST 11",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~661",
                    top: "PASIR RIS DR 3",
                    topFont: "Mobitec-7:7",
                    bottom: "PASIR RIS DR 6",
                    bottomFont: "Mobitec-7:4",
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
                text: "TEMASEK BLVD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL DR",
                    bottomFont: "Mobitec-5:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL EAST",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL FIELD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL WAY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "ROBINSON RD",
                    bottomFont: "Mobitec-7:4",
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
                text: "DAMAI LRT",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "DAMAI LRT",
                    topFont: "Mobitec-7:7",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "DAMAI LRT",
                    topFont: "Mobitec-7:7",
                    bottom: "PUNGGOL WAY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "DAMAI LRT",
                    topFont: "Mobitec-7:7",
                    bottom: "PUNGGOL FIELD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~666",
                    top: "DAMAI LRT",
                    topFont: "Mobitec-7:7",
                    bottom: "PUNGGOL EAST",
                    bottomFont: "Mobitec-7:4",
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6668: { // Old Route before 251124
        front: {
            renderType: "standardService",
            serviceNumber: "666",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "666",
                    top: "Marina",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Boulevard",
                    bottomFont: "Mobitec-7:5:1",
                    image: "CityDirect",
                },
                "PUNGGOL DR",
                "PUNGGOL EAST",
                "PUNGGOL FIELD",
                "PUNGGOL WAY",
                "ROBINSON RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6669: { // Old Route before 251124
        front: {
            renderType: "standardService",
            serviceNumber: "666",
            destination: {
                text: "PUNGGOL DRIVE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "666",
                    top: "Punggol",
                    topFont: "Mobitec-7:5:2",
                    bottom: "Drive",
                    bottomFont: "Mobitec-7:5:2",
                    image: "CityDirect",
                },
                "SHENTON WAY",
                "PUNGGOL WAY",
                "PUNGGOL FIELD",
                "PUNGGOL EAST",
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
                text: "TEMASEK BLVD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "TG PAGAR MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "MARINA BLVD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "BAYFRONT MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PROMENADE MRT",
                    bottomFont: "Mobitec-7:4",
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
                text: "PUNGGOL POINT",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "PUNGGOL POINT",
                    topFont: "Mobitec-7:5:1",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "PUNGGOL POINT",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL WAY / FIELD",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "PUNGGOL POINT",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL CRES / LANE",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "PUNGGOL POINT",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL WALK / LINK",
                    bottomFont: "Hanover-7:3",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "PUNGGOL POINT",
                    topFont: "Mobitec-7:5:1",
                    bottom: "NIBONG LRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~673",
                    top: "PUNGGOL POINT",
                    topFont: "Mobitec-7:5:1",
                    bottom: "SAMUDERA LRT",
                    bottomFont: "Mobitec-7:4",
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
                text: "TEMASEK BLVD",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "TG PAGAR MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "MARINA BLVD",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "BAYFRONT MRT",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "TEMASEK BLVD",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PROMENADE MRT",
                    bottomFont: "Mobitec-7:4",
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
                text: "PUNGGOL CENTRAL",
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
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "PUNGGOL CTRL",
                    topFont: "Mobitec-7:5:1",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "PUNGGOL CTRL",
                    topFont: "Mobitec-7:5:1",
                    bottom: "SENGKANG EAST DR",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "PUNGGOL CTRL",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL EAST",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "PUNGGOL CTRL",
                    topFont: "Mobitec-7:5:1",
                    bottom: "PUNGGOL NTH AVE",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~678",
                    top: "PUNGGOL CTRL",
                    topFont: "Mobitec-7:5:1",
                    bottom: "EDGEFIELD PLAINS",
                    bottomFont: "Mobitec-7:4",
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
                    serviceNumber: "~999",
                    top: "PUNGGOL CTRL",
                    topFont: "Mobitec-7:5:1",
                    bottom: "SHENTON WAY",
                    bottomFont: "Mobitec-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "~999",
                    top: "PUNGGOL POINT LRT",
                    topFont: "Mobitec-7:4:3",
                    bottom: "PUNGGOL FIELD / WAY",
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
