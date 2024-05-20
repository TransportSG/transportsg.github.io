EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-19:GoAheadB9Front",
                    "else": "$serviceFont"
                }
            },
            spacing: 3
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
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
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
                bottom: 0
            }
        },
        text: "$top"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:GoAheadB9Front",
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
                    "else": "LECIP-10"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "FULL"
    },
    'centreMessageServiceScroll': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 1
            },
            text: '$serviceNumber',
            font: 'LECIP-19:GoAheadB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 1
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        },
        bottom: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 1
            },
            text: '$bottom',
            font: '$bottomFont',
            spacing: 1
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

EDSData.GASG = {
    1: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        }
    },
    2: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "KAMPONG BAHRU",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Kampong Bahru",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "2"
                },
                    "LOYANG AVE / WAY",
                    "UPPER CHANGI MRT / RD",
                    "BEDOK RD",
                    "TANAH MERAH MRT",
                    "BEDOK MRT",
                    "CHANGI RD",
                    "GEYLANG RD",
                    "LAVENDER / BUGIS MRT",
                    "VICTORIA ST / HILL ST",
                    "CLARKE QUAY MRT",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "CHANGI VILLAGE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Changi Village",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "2"
                },
                    "CHINATOWN / CLARKE QUAY",
                    "HILL ST / VICTORIA ST",
                    "BUGIS / LAVENDER MRT",
                    "KALLANG MRT",
                    "SIMS AVE",
                    "EUNOS / KEMBANGAN MRT",
                    "BEDOK / TANAH MERAH MRT",
                    "BEDOK RD",
                    "UPPER CHANGI MRT",
                    "LOYANG WAY / AVE",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "2A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2A",
                destination: "TANAH MERAH MRT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "EU TONG SEN ST"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "2B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2B",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "BEDOK STN EXIT A"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "2N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "NEW BRIDGE RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "New Bridge Rd",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "2"
                },
                    "LOYANG AVE / WAY",
                    "UPPER CHANGI MRT / RD",
                    "BEDOK RD",
                    "TANAH MERAH MRT",
                    "BEDOK MRT",
                    "CHANGI RD",
                    "GEYLANG RD",
                    "LAVENDER / BUGIS MRT",
                    "VICTORIA ST / HILL ST",
                    "CLARKE QUAY MRT",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "CHANGI VILLAGE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Changi Village",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "2"
                },
                    "CHINATOWN / CLARKE QUAY",
                    "HILL ST / VICTORIA ST",
                    "BUGIS / LAVENDER MRT",
                    "KALLANG MRT",
                    "SIMS AVE",
                    "EUNOS / KEMBANGAN MRT",
                    "BEDOK / TANAH MERAH MRT",
                    "BEDOK RD",
                    "UPPER CHANGI MRT",
                    "LOYANG WAY / AVE",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "TAMPINES",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Tampines",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "3"
                },
                    "PUNGGOL CENTRAL / FIELD",
                    "TPE",
                    "PASIR RIS DR 12 / 1",
                    "PASIR RIS ST 71",
                    "PASIR RIS INT / MRT",
                    "PASIR RIS DR 3 / ST 21",
                    "TAMPINES EAST MRT",
                    "TAMPINES ST 21"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "3"
                },
                    "TAMPINES ST 21",
                    "TAMPINES EAST MRT",
                    "TAMPINES AVE 2 / 7",
                    "PASIR RIS ST 21 / DR 3",
                    "PASIR RIS MRT",
                    "PASIR RIS ST 71",
                    "PASIR RIS DR 1 / 12", 
                    "TPE",
                    "PUNGGOL FIELD / CENTRAL"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "3A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "3A",
                destination: "PASIR RIS DR 12",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "3A",
                    top: "TERMINATING AT",
                    topFont: "Hanover-10",

                    bottom: "PASIR RIS DR 12",
                    bottomFont: "Hanover-7:5"
                },
                    "TAMPINES ST 21",
                    "TAMPINES EAST MRT",
                    "TAMPINES AVE 2 / 7",
                    "PASIR RIS ST 21 / DR 3",
                    "PASIR RIS MRT",
                    "PASIR RIS DR 1 / ST 71"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    6: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "6",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "6"
                },
                    "PASIR RIS DR 3",
                    "LOYANG AVE",
                    "LOYANG WAY",
                    "LOYANG CRES (LOOP)"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "6",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    12: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "KAMPONG BAHRU",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Kampong Bahru",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "12"
                },
                    "TAMPINE EAST MRT",
                    "SIMEI RD",
                    "TANAH MERAH MRT",
                    "BEDOK SOUTH RD",
                    "EAST COAST RD",
                    "MOUNTBATTEN MRT",
                    "GEYLANG RD",
                    "LAVENDER / BUGIS MRT",
                    "VICTORIA ST / HILL ST",
                    "CLARKE QUAY / CHINATOWN",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "12"
                },
                "CHINATOWN", 
                "CLARKE QUAY MRT",
                "HILL ST / VICTORIA ST",
                "BUGIS / LAVENDER MRT",
                "KALLANG MRT",
                "MOUNTBATTEN MRT",
                "EAST COAST RD",
                "BEDOK SOUTH RD",
                "TANAH MERAH MRT",
                "SIMEI RD",
                "TAMPINES EAST MRT",
                "PASIR RIS DR 1 / 6 / 3"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "12E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "12e",
                destination: "KAMPONG BAHRU",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "KAMPONG BAHRU",
                    topFont: "LECIP-10",
        
                    serviceNumber: "12e"
                },
                    "PASIR RIS DR 6 / 1",
                    "TAMPINES AVE 7 / 2",
                    "SIMEI RD",
                    "BEDOK SOUTH RD",
                    "ECP (EXPRESS)",
                    "BUGIS",
                    "CLARKE QUAY",
                    "CHINATOWN"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12e",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "PASIR RIS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "12e"
                },
                    "CLARKE QUAY",
                    "BUGIS",
                    "ECP (EXPRESS)",
                    "BEDOK SOUTH RD",
                    "SIMEI RD",
                    "TAMPINES AVE 2 / 7",
                    "PASIR RIS DR 1 / 6"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "12N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "NEW BRIDGE RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "New Bridge Rd",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "12"
                },
                    "TANAH MERAH MRT"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "12"
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    15: { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "15",
                destination: "MARINE PARADE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Marine Parade",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "15"
                },
                    "PASIR RIS ST 52, DR 1 / 8",
                    "TAMPINES AVE 12 / 7 / 4 / 5 / 1",
                    "BEDOK NORTH RD",
                    "BEDOK RESERVOIR RD",
                    "JALAN EUNOS / MRT",
                    "STILL RD",
                    "TELOK KURAU RD",
                    "JOO CHIAT PLACE"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "15",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "15"
                },
                    "JOO CHIAT PLACE",
                    "STILL RD",
                    "JALAN EUNOS / MRT",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH RD",
                    "TAMPINES WEST MRT",
                    "TAMPINES AVE 1 / 5 / 4 / 7 / 12",
                    "PASIR RIS DR 8/1, ST 52"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "15A": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "15A",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "JALAN EUNOS"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    17: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "17",
                destination: "BEDOK",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Bedok",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "17"
                },
                    "PASIR RIS DR 3 / 4",
                    "PASIR RIS ST 12 / 11",
                    "TAMPINES AVE 7 / 2",
                    "TAMPINES EAST MRT",
                    "SIMEI AVE",
                    "BEDOK NORTH AVE 4",
                    "BEDOK NORTH RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "17",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "17"
                },
                    "BEDOK NORTH RD",
                    "BEDOK NORTH AVE 4",
                    "SIMEI AVE",
                    "TAMPINES EAST MRT",
                    "TAMPINES AVE 2 / 7",
                    "PASIR RIS ST 11 / 12",
                    "PASIR RIS DR 4 / 3",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "17A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "17A",
                destination: "BEDOK NORTH AVE 4",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "17A",
                    top: "TERMINATING AT",
                    topFont: "Hanover-10",

                    bottom: "BEDOK NORTH AVE 4",
                    bottomFont: "Hanover-7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "17A",
                    top: "TERMINATING AT",
                    topFont: "Hanover-10",

                    bottom: "SBST BEDOK NTH DEPOT",
                    bottomFont: "Hanover-7:5"
                },
                    "BEDOK NORTH AVE 1",
                    "BEDOK NORTH RD",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    34: { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Changi Airport",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "34"
                },
                    "PUNGGOL RD",
                    "TPE",
                    "TAMPINES AVE 10 / 5 / 2",
                    "TAMPINES EAST MRT"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "34"
                },
                    "TAMPINES EAST MRT",
                    "TAMPINES AVE 2 / 5 / 10",
                    "TAMPINES EXPRESSWAY",
                    "PUNGGOL RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "34A": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34A",
                destination: "TAMPINES AVE 5",
                destinationFont: "Hanover-10",
                scrolls: [
                    "PUNGGOL RD",
                    "TPE",
                    "TAMPINES AVE 10"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "34B": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34B",
                destination: "TAMPINES AVE 10",
                destinationFont: "Hanover-10",
                scrolls: [
                    "TAMPINES AVE 5 / 2 / 7",
                    "CHANGI AIRPORT",
                    "TAMPINES AVE 7 / 2 / 5"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    36: { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "TOMLINSON RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Tomlinson Road",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "36"
                },
                    "MARINE PARADE RD",
                    "SUNTEC CITY",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SOMERSET MRT",
                    "ORCHARD BOULEVARD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Changi Airport",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "36"
                },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "SUNTEC CITY",
                    "MARINE PARADE RD",
                    "SIGLAP RD / LINK"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "36A": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36A",
                destination: "TOMLINSON RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "36A",
                    top: "TERMINATING AT",
                    topFont: "Hanover-10",

                    bottom: "TOMLINSON RD",
                    bottomFont: "Hanover-7:5"
                },
                    "MARINE PARADE RD",
                    "SUNTEC CITY",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SOMERSET MRT / RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "36B": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36B",
                destination: "SIGLAP RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "36B",
                    top: "TERMINATING AT SIGLAP RD",
                    topFont: "LECIP-6:4",

                    bottom: "(BEF SEASIDE RESIDENCES)",
                    bottomFont: "LECIP-6:4"
                },
                    "MARINE PARADE RD",
                    "SUNTEC CITY",
                    "DHOBY GHAUT MRT",
                    "ORCHARD BOULEVARD",
                    "TOMLINSON RD (LOOP)",
                    "ORCHARD RD",
                    "SUNTEC CITY",
                    "MARINE PARADE RD",
                    ],
                    scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "36T": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36T",
                destination: "ENDS AT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "CHANGI AIRPORT T2"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36T",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    43: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "UPPER EAST COAST",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Upper East Coast",
                    topFont: "Hanover-GoAhead14:7",
        
                    serviceNumber: "43"
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "43"
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "43E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43e",
                destination: "MARINE PARADE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "MARINE PARADE",
                    topFont: "LECIP-10",
        
                    serviceNumber: "43e"
                },
                    "SENGKANG EAST RD",
                    "BUANGKOK MRT",
                    "KPE (EXPRESS)",
                    "PAYA LEBAR RD",
                    "TANJONG KATONG RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43e",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "PUNGGOL",
                    topFont: "LECIP-10",
        
                    serviceNumber: "43e"
                },
                    "TANJONG KATONG RD",
                    "PAYA LEBAR RD",
                    "KPE (EXPRESS)",
                    "BUANGKOK MRT",
                    "SENGKANG EAST RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "43M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43M",
                destination: "SERANGOON MRT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Serangoon MRT",
                    topFont: "Hanover-GoAhead14:7",
        
                    serviceNumber: "43M"
                },
                    "PUNGGOL WAY",
                    "SENGKANG EAST RD",
                    "BUANGKOK MRT",
                    "BUANGKOK GREEN",
                    "YIO CHU KANG RD"

                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43M",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "43M"
                },
                    "YIO CHU KANG RD",
                    "BUANGKOK GREEN",
                    "BUANGKOK MRT",
                    "SENGKANG EAST RD",
                    "PUNGGOL WAY"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    62: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "SIMS AVE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Sims Ave",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "62"
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
                    "GEYLANG RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "62"
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
                    "PUNGGOL EAST / FIELD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "62A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62A",
                destination: "ALJUNIED MRT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "62A",
                    top: "TERMINATING AT",
                    topFont: "Hanover-10",

                    bottom: "ALJUNIED MRT",
                    bottomFont: "LECIP-7:5"
                },
                    "PUNGGOL FIELD / EAST",
                    "SENGKANG EAST DR",
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 8 / 10",
                    "HOUGANG MRT",
                    "HOUGANG AVE 2 / 3 / 1",
                    "LORONG AH SOO",
                    "UPPER PAYA LEBAR RD",
                    "TAI SENG MRT",
                    "MACPHERSON RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    68: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68",
                destination: "TAMPINES",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Tampines",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "68"
                },
                    "ELIAS RD",
                    "PASIR RIS ST 71",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 11",
                    "TAMPINES AVE 6",
                    "TAMPINES CONCOURSE"

                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "68",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "68"
                },
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 6",
                    "TAMPINES AVE 11",
                    "TAMPINES AVE 10",
                    "PASIR RIS ST 71",
                    "ELIAS RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "68A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68A",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "TAMPINES INT"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "68B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68B",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "TAMPINES AVE 11"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    82: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "82",
                destination: "SERANGOON MRT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Serangoon MRT",
                    topFont: "Hanover-GoAhead14:7",
        
                    serviceNumber: "82"
                },
                    "PUNGGOL RD", 
                    "HOUGANG AVE 10", 
                    "HOUGANG AVE 2", 
                    "UPPER SERANGOON RD", 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "82",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "82",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "82"
                },
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 2",
                    "HOUGANG AVE 10",
                    "PUNGGOL RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "82",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    83: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83",
                destination: "SENGKANG",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Sengkang",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "83"
                },
                    "PUNGGOL CENTRAL",
                    "PUNGGOL WAY",
                    "PUNGGOL FIELD",
                    "PUNGGOL RD",
                    "SENGKANG EAST RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "83",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "83"
                },
                    "SENGKANG EAST RD",
                    "PUNGGOL RD",
                    "PUNGGOL FIELD",
                    "PUNGGOL WAY",
                    "PUNGGOL CENTRAL"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "83T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83T",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "SENGKANG INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83T",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    84: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "84",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "84"
                },
                    "SENTUL CRESCENT",
                    "PUNGGOL WAY",
                    "NORTHSHORE DRIVE",
                    "NEW PUNGGOL RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "84",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    85: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "85",
                destination: "YISHUN",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Yishun",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "85"
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "85",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "85"
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
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "85A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "85A",
                destination: "SENGKANG EAST RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "85A",
                    top: "TERMINATING AT",
                    topFont: "LECIP-7:5",

                    bottom: "SENGKANG EAST RD",
                    bottomFont: "LECIP-7:5"
                },
                    "YISHUN AVE 2",
                    "JALAN KAYU",
                    "SENGKANG WEST WAY",
                    "SENGKANG EAST WAY"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    118: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118",
                destination: "CHANGI BUSINESS PARK",
                destinationFont: "Lecip-GoAhead10:6",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Changi Business Park",
                    topFont: "Hanover-GoAhead14:6",
        
                    serviceNumber: "118"
                },
                    "PUNGGOL WAY",
                    "TPE",
                    "TAMPINES AVE 10 / 8 / 1",
                    "SIMEI AVE",
                    "XILIN AVE",
                    "EXPO MRT",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "118",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "118"
                },
                    "EXPO MRT",
                    "XILIN AVE",
                    "SIMEI AVE",
                    "TAMPINES WEST MRT",
                    "TAMPINES AVE 1 / 8 / 10",
                    "TPE",
                    "PUNGGOL WAY"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "118A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118A",
                destination: "SIMEI AVE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "118A",
                    top: "TERMINATING AT",
                    topFont: "LECIP-7:5",

                    bottom: "ITE COLL EAST ADM BLK",
                    bottomFont: "LECIP-6:4"
                },
                    "TAMPINES AVE 10 / 8",
                    "TAMPINES AVE 1",
                    "TAMPINES WEST MRT"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "118B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118B",
                destination: "tpe (bef punggol rd)",
                destinationFont: "Lecip-GoAhead10:6",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "118B",
                    top: "TERMINATING AT",
                    topFont: "LECIP-7:5",

                    bottom: "TPE (BEF PUNGGOL RD)",
                    bottomFont: "LECIP-7:5"
                },
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 8",
                    "TAMPINES AVE 10"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    119: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "119",
                destination: "KOVAN",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Kovan",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "119"
                },
                    "PUNGGOL FIELD",
                    "SENGKANG MRT",
                    "SENGKANG EAST WAY",
                    "RIVERVALE DRIVE",
                    "PUNGGOL RD",
                    "HOUGANG AVE 10 / 8",
                    "UPPER SERANGOON RD",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "119",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "119"
                },
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 8 / 10",
                    "PUNGGOL RD",
                    "RIVERVALE DRIVE",
                    "SENGKANG EAST WAY",
                    "SENGKANG MRT",
                    "PUNGGOL FIELD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    136: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "136",
                destination: "ANG MO KIO",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Ang Mo Kio",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "136"
                },
                    "PUNGGOL CENTRAL",
                    "EDGEFIELD PLAINS",
                    "PUNGGOL FIELD / RD",
                    "RIVERVALE DR",
                    "UPPER SERANGOON RD",
                    "SERANGOON GARDENS",
                    "ANG MO KIO AVE 1 / 6 / 3"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TO",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                    renderType: "destScroll",
                    top: "136",
                    topFont: "LECIP-20:9",
        
                    serviceNumber: ""
                },
                    "AMK"
                ],
                scrollFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "136",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "136"
                },
                    "ANG MO KIO AVE 3 / 6 / 1",
                    "SERANGOON GARDENS",
                    "YIO CHU KANG RD",
                    "UPPER SERANGOON RD",
                    "RIVERVALE DR",
                    "PUNGGOL RD",
                    "PUNGGOL CENTRAL"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TO",
                destinationFont: "LECIP-6:3",
                scrolls: [{
                    renderType: "destScroll",
                    top: "136",
                    topFont: "LECIP-20:9",
        
                    serviceNumber: ""
                },
                    "PUNGGOL"
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    354: { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "354",
                destination: "PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "354"
                },
                    "DOWNTOWN EAST",
                    "JALAN LOYANG BESAR",
                    "PASIR RIS DR 3"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "354",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    358: { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "358",
                destination: "PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "358"
                },
                    "PASIR RIS DR 3 / 10",
                    "ELIAS RD",
                    "PASIR RIS DR 3 / 6",
                    "PASIR RIS DR 1 / 4",
                    "PASIR RIS ST 41"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "358",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "358T": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "358T",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                 "PASIR RIS INT"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "358T",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    359: { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "359",
                destination: "PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "359"
                },
                    "PASIR RIS DR 3 / 12",
                    "PASIR RIS ST 71",
                    "PASIR RIS DR 12 / 3",
                    "PASIR RIS ST 51",
                    "PASIR RIS DR 11, ST 11",
                    "LOYANG AVE",
                    "PASIR RIS DR 3 / 2"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "359",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "359T": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "359T",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                 "PASIR RIS INT"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "359T",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    381: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "381",
                destination: "PUNGGOL INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "381"
                },
                 "PUNGGOL WAY",
                 "PUNGGOL CENTRAL / MRT",
                 "EDGEFIELD PLAINS",
                 "PUNGGOL FIELD / EAST",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "381",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "382G": {
        1: {
            front: {
                    renderType: "standardService",
                    serviceNumber: "382G",
                    destination: "PUNGGOL INT",
                    destinationFont: "Hanover-10",
                    scrolls: [{
                        renderType: "destScroll",
                        top: "Punggol",
                        topFont: "Lecip-GoAhead16:10",
            
                        serviceNumber: "382G"
                    },
                 "PUNGGOL FIELD",
                 "SUMANG WALK",
                 "SUMANG LINK",
                 "SENTUL CRESCENT",
                 "PUNGGOL PLACE"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382G",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "382W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382W",
                destination: "PUNGGOL INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "382W"
                },
                 "PUNGGOL PLACE",
                 "SENTUL CRESCENT",
                 "SUMANG LINK",
                 "SUMANG WALK",
                 "PUNGGOL FIELD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382W",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "382A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382A",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                 "SUMANG LANE",
                 "BLK 226A"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    384: {
        1: {
            front: {
                    renderType: "standardService",
                    serviceNumber: "384",
                    destination: "PUNGGOL INT",
                    destinationFont: "Hanover-10",
                    scrolls: [{
                        renderType: "destScroll",
                        top: "Punggol",
                        topFont: "Lecip-GoAhead16:10",
            
                        serviceNumber: "384"
                    },
                 "PUNGGOL CENTRAL",
                 "SENTUL CRESCENT",
                 "PUNGGOL WAY",
                 "NORTHSHORE DRIVE",
                 "NEW PUNGGOL RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "384",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    386: {
        1: {
            front: {
                    renderType: "standardService",
                    serviceNumber: "386",
                    destination: "PUNGGOL INT",
                    destinationFont: "Hanover-10",
                    scrolls: [{
                        renderType: "destScroll",
                        top: "Punggol",
                        topFont: "Lecip-GoAhead16:10",
            
                        serviceNumber: "386"
                    },
                 "PUNGGOL CENTRAL",
                 "EDGEFIELD PLAINS",
                 "PUNGGOL FIELD",
                 "PUNGGOL EAST"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "386",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "386A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "386A",
                destination: "TERMINATING AT",
                destinationFont: "Hanover-10",
                scrolls: [
                 "EDGEDALE PLAINS",
                 "BLK 682A"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "386A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    403: { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "403",
                destination: "PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "403"
                },
                 "PASIR RIS DR 8 / 1",
                 "ELIAS RD",
                 "PASIR RIS RD",
                 "PASIR RIS PARK"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "403",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    518: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "518",
                destination: "BAYFRONT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BAYFRONT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "518"
                },
                    "PASIR RIS DR 3 / 12",
                    "TAMPINES AVE 7",
                    "TAMPINES AVE 2 / 1",
                    "BEDOK NORTH MRT",
                    "NEWTON MRT",
                    "ORCHARD RD", 
                    "SUNTEC CITY",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "518",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "PASIR RIS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "518"
                },
                    "ORCHARD RD",
                    "SUNTEC CITY",
                    "MARINA BAY SANDS",
                    "BEDOK NORTH MRT",
                    "TAMPINES WEST MRT",
                    "TAMPINES AVE 1 / 2",
                    "TAMPINES EAST MRT",
                    "PASIR RIS DR 1 / 3"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "518A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "518A",
                destination: "BAYFRONT",
                destinationFont: "Hanover-10",
                scrolls: [
                    "PASIR RIS DR 3 / 1",
                    "LOYANG AVE",
                    "ORCHARD RD",
                    "SUNTEC CITY",
                    "(SKIPS TAMPINES)"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    661: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "661",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-10",
                scrolls: [
                    "PASIR RIS DR 6",
                    "PASIR RIS ST 11",
                    "LOYANG AVE",
                    "ROBINSON RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "661",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "661",
                destination: "PASIR RIS DR 1",
                destinationFont: "Hanover-10",
                scrolls: [
                    "SHENTON WAY",
                    "LOYANG AVE",
                    "PASIR RIS ST 11",
                    "PASIR RIS DR 6"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "661",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    666: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "666",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-10",
                scrolls: [
                    "PUNGGOL DR",
                    "PUNGGOL EAST",
                    "PUNGGOL FIELD",
                    "PUNGGOL WAY",
                    "ROBINSON RD"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "666",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "666",
                destination: "PUNGGOL DRIVE",
                destinationFont: "Hanover-10",
                scrolls: [
                    "SHENTON WAY",
                    "PUNGGOL WAY",
                    "PUNGGOL FIELD",
                    "PUNGGOL EAST"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "666",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    1111: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SORRY",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "NOT IN SERVICE",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "NOT IN",
                topFont: "LECIP-6:4",
                topSpacing: 1,

                bottom: "SERVICE",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    1112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "136",
                destination: "TERMINATING AT",
                destinationFont: "Mobitec-7:5:2",
                scrolls: [
                    "BUANGKOK MRT",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twoline",
                top: "ON",
                topFont: "LECIP-6:4",
                topSpacing: 1,

                bottom: "TEST",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    1113: {
        1: {
            front: {
                renderType: "destScroll",
                top: "Changi Village",
                topFont: "Lecip-GoAhead16:10",
    
                serviceNumber: "83"
            },
            rear: { 
                renderType: "twoline",
                top: "ON",
                topFont: "LECIP-6:4",
                topSpacing: 1,

                bottom: "TEST",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    2222: {
        1: {
            front: { 
                renderType: "message",
                text: "GO AHEAD SINGAPORE",
                font: "Hanover-10",
                spacing: 1
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GO-AHEAD",
                destinationFont: "LECIP-6:3",
                scrolls: [{
                    renderType: "destScroll",
                    top: "~",
                    topFont: "LECIP-19:GoAheadB9Front",
        
                    serviceNumber: ""
                },
                    "S'PORE"
                ],
                scrollFont: "LECIP-6:3"
            },
        }
    },
    2223: {
        1: {
            front: { 
                renderType: "twoline",
                top: "GO AHEAD SINGAPORE",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "(FONTS ARE STILL WIP)",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GO-AHEAD",
                destinationFont: "LECIP-6:3",
                scrolls: [{
                    renderType: "destScroll",
                    top: "~",
                    topFont: "LECIP-19:GoAheadB9Front",
        
                    serviceNumber: ""
                },
                    "S'PORE"
                ],
                scrollFont: "LECIP-6:3"
            }
        }
    },
    4000: {
        1: {
            front: { 
                renderType: "message",
                text: "PASIR RIS - OUTRAM",
                font: "LECIP-20:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "PSR - ",
                topFont: "LECIP-7:5",

                bottom: "OTP",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    4001: {
        1: {
            front: { 
                renderType: "message",
                text: "OUTRAM - PASIR RIS",
                font: "LECIP-20:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "OTP - ",
                topFont: "LECIP-7:5",

                bottom: "PSR",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    4002: {
        1: {
            front: { 
                renderType: "message",
                text: "OUTRAM-TANAH MERAH-EXPO-CHANGI AIRPORT",
                font: "LECIP-6:3",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "OTP - ",
                topFont: "LECIP-7:5",

                bottom: "CGA",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    4003: {
        1: {
            front: { 
                renderType: "message",
                text: "CHANGI AIRPORT-EXPO-TANAH MERAH-OUTRAM",
                font: "LECIP-6:3",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "CGA - ",
                topFont: "LECIP-7:5",

                bottom: "OTP",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    4011: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SHUTTLE 1",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "RAFFLES PLACE - BUONA VISTA",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "RFP -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "BNV",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4012: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SHUTTLE 1",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "BUONA VISTA - RAFFLES PLACE",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "BNV -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "RFP",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4041: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SHUTTLE 4",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "JURONG EAST - CHOA CHU KANG",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "JUR -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "CCK",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4042: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SHUTTLE 4",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "CHOA CHU KANG - JURONG EAST",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "CCK -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "JUR",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4071: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "PASIR RIS - TANAH MERAH",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "PSR -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "TMN",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4072: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "TANAH MERAH - PASIR RIS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "TNM -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "PSR",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4073: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "TANAH MERAH - ALJUNIED",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "TNM -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "ALJ",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4074: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "ALJUNIED - TANAH MERAH",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "ALJ -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "TNM",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4101: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SHUTTLE 10",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "WOODLANDS - ANG MO KIO",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "WDL -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "AMK",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    4012: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 10",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "ANG MO KIO - WOODLANDS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "AMK -",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "WDL",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    7001: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 1",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 1",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7002: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 2",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 2",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7003: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 3",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 3",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7004: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 4",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 4",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7005: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 5",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 5",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7006: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 6",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 6",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7007: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 7",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 7",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7008: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 8",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 8",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7009: {
        1: {
            front: { 
                renderType: "message",
                text: "GA 9",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "GA 9",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    7101: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  01",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "01",
                bottomFont: "LECIP-10"
            }
        }
    },
    7102: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  02",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "02",
                bottomFont: "LECIP-10"
            }
        }
    },
    7103: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  03",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "03",
                bottomFont: "LECIP-10"
            }
        }
    },
    7104: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  04",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "04",
                bottomFont: "LECIP-10"
            }
        }
    },
    7105: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  05",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "05",
                bottomFont: "LECIP-10"
            }
        }
    },
    7106: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  06",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "06",
                bottomFont: "LECIP-10"
            }
        }
    },
    7107: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  07",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "07",
                bottomFont: "LECIP-10"
            }
        }
    },
    7108: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  08",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "08",
                bottomFont: "LECIP-10"
            }
        }
    },
    7109: {
        1: {
            front: { 
                renderType: "message",
                text: "GA  RIDE  09",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "GA RIDE",
                topFont: "LECIP-6:4",

                bottom: "09",
                bottomFont: "LECIP-10"
            }
        }
    },
    9999: {
        1: {
            front: { 
                renderType: "message",
                text: "LECIP 24122023",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LECIP",
                topFont: "LECIP-6:3",

                bottom: "24122023",
                bottomFont: "LECIP-6:3"
            }
        }
    }
}

EDSImages.GASG = {
}
