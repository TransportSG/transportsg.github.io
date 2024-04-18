EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-GoAhead16:10",
            spacing: 3
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
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-GoAhead16:10",
            spacing: {
                $$cond: {
                    "$spacing === null" : 3,
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
                    "else": "Mobitec-6:5"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
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
                    serviceNumber: "12",
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
                "TANAH MERAH MRT"
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
                "PASIR RIS ST 12 / 13",
                "PASIR RIS DR 1 / 6 / 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    151: {
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
                "PASIR RIS ST 52, DR 1 / 8",
                "TAMPINES AVE 12/7/4/5/1",
                "BEDOK NORTH RD",
                "BEDOK RESERVOIR RD",
                "JALAN EUNOS / MRT",
                "STILL RD",
                "TELOK KURAU RD",
                "JOO CHIAT PLACE"
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
                "JOO CHIAT PLACE",
                "STILL RD",
                "JALAN EUNOS / MRT",
                "BEDOK RESERVOIR RD",
                "BEDOK NORTH RD",
                "TAMPINES WEST MRT",
                "TAMPINES AVE 1/5/4/7/12",
                "PASIR RIS DR 8 / 1, ST 52"
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
                "TAMPINES EXPRESSWAY",
                "TAMPINES AVE 10 / 5 / 2",
                "TAMPINES EAST MRT"
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
                "TAMPINES AVE 2 / 5 / 10",
                "TAMPINES EXPRESSWAY",
                "PUNGGOL RD"
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
                "SUNTEC CITY",
                "MARINE PARADE RD",
                "SIGLAP RD / LINK"
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
                "PUNGGOL CENTRAL",
                "EDGEFIELD PLAINS",
                "PUNGGOL FIELD / RD",
                "RIVERVALE DR",
                "UPPER SERANGOON RD",
                "SERANGOON GARDENS",
                "ANG MO KIO AVE 1 / 6 / 3",
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
                "UPPER SERANGOON RD",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    2222: {
        front: {
            renderType: "message",
            text: "Go Ahead Singapore",
            font: "Mobitec-13:8",
            spacing: 1
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
    9998: {
        front: {
            renderType: "destScroll",
            top: "Go Ahead Singapore",
            topFont: "Mobitec-7:5:2",

            bottom: "Fonts and scrolls are still WIP",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    9999: {
        front: {
            renderType: "message",
            text: "VER.10JUN19-DD",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
}

EDSExtras.GASG = {}

EDSImages.GASG = {
}
