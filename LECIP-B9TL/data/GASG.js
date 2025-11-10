EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
            rotateSpeed: 2500,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    logo: {
        logo: {
            align: "centre-x,bottom",
            image: "$image"
        },

        text: "$text"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing",
        },

        text: "$text"
    },
    standardService2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
                right: 'width(serviceNumber)',
                top: "1",
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)',
                bottom: "1",
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2500,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    logo: {
        logo: {
            align: "centre-x,bottom",
            image: "$image"
        },

        text: "$text"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing",
        },

        text: "$text"
    },
    message2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-19:GoAheadSpecialB9Front",
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
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 1
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
                    "$bottomFont === null": "Hanover-5:3",
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
    message3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-19:GoAheadSpecialB9Front",
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
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 2,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 1
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
                    "$bottomFont === null": "Hanover-5:3",
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
    GASSeasonalGreetings: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-19:GoAheadB9Front2",
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
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 1
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
                    "$bottomFont === null": "Hanover-5:3",
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
    GASSeasonalGreetingsRear: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-19:GoAheadB9Front2",
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
                    "$topFont === null": "Mobitec-9:6",
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
                    "$bottomFont === null": "Hanover-5:3",
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
    destScrollWithImage: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-19:GoAheadB9Front3",
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
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 1
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
                    "$bottomFont === null": "Hanover-5:3",
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
    destScrollWithImage2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-19:GoAheadB9Front3",
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
                    "$topFont === null": "Mobitec-9:6",
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
                    "$bottomFont === null": "Hanover-5:3",
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
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$svcFont !== null": "$svcFont",
                    "else": "LECIP-19:GoAheadB9Front3"
                }
            },
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
    destScroll2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$svcFont !== null": "$svcFont",
                    "else": "LECIP-19:GoAheadB9Front3"
                }
            },
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
            spacing: 2,
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
                right: 0
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
        },
        2: {
            front: {
                renderType: "message",
                text: "ALL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "ALL",
                font: "LECIP-20:6",
                spacing: 2
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Kampong Bahru",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "2"
                },
                {
                    renderType: "message",
                    text: "2",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "Lecip-GoAhead20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "CHANGI VILLAGE",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Changi Village",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "2"
                },
                {
                    renderType: "message",
                    text: "2",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "Lecip-GoAhead20:12",
                spacing: 2
            }
        }
    },
    "2B": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2B",
                destination: "BEDOK MRT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "2B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "BEDOK STN EXIT A",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2B",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Tampines",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "3"
                },
                {
                    renderType: "message",
                    text: "3",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "3"
                },
                {
                    renderType: "message",
                    text: "3",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "3A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "PASIR RIS DR 12",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "3A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "BLK 747A",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },    
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3A",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "6"
                },
                {
                    renderType: "message",
                    text: "6",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "6",
                font: "Lecip-GoAhead20:12",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Kampong Bahru",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "12"
                },
                {
                    renderType: "message",
                    text: "12",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "12"
                },
                {
                    renderType: "message",
                    text: "12",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "12e",
                    top: "Kampong",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "Bahru",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "ExpressLogo-49",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12e",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12e",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "12e",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead9:6:1",
                    image: "ExpressLogo-49",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12e",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Marine Parade",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "15"
                },
                {
                    renderType: "message",
                    text: "15",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "15",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "15"
                },
                {
                    renderType: "message",
                    text: "15",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        }
    },
    "15A": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "15A",
                destination: "JALAN EUNOS",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "15A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "OPP EUNOS STN",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15A",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Bedok",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "17"
                },
                {
                    renderType: "message",
                    text: "17",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "17",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "17"
                },
                {
                    renderType: "message",
                    text: "17",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "17A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "BEDOK NORTH AVE 4",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "17A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "sbst bedok nth depot",
                    bottomFont: "Lecip-GoAheadShortTripNonsenseFont",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17A",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "34": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-10",
                scrolls: [  
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "34",
                    top: "Changi Airport",
                    topFont: "Lecip-GoAhead16:10",
                },
                {
                    renderType: "message",
                    text: "34",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "PUNGGOL COAST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol Coast",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "34"
                },   
                {
                    renderType: "message",
                    text: "34",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },              
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "34A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "TAMPINES AVE 5",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "34A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "OPP OUR TAMPINES HUB",
                    bottomFont: "Hanover-7:5",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34A",
                font: "Lecip-GoAhead20:9",
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
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "34B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "TAMPINES AVE 10",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "34B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "TAMPINES WATER FAB PK",
                    bottomFont: "Hanover-7:5",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34B",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Tomlinson Road",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "36"
                },
                {
                    renderType: "message",
                    text: "36",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "36",
                    top: "Changi Airport",
                    topFont: "Lecip-GoAhead16:10",
                    image: "plane"
                },
                {
                    renderType: "message",
                    text: "36",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "36A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "TOMLINSON RD",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "36A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "AFT CUSCADEN RD",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36A",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "36B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "SIGLAP RD",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "36B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "BEF SEASIDE RESIDENCES",
                    bottomFont: "Lecip-GoAhead8:4",
                },
                    ],
                    scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36B",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "36T": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36T",
                destination: "TERMINATES AT CHANGI AIRPORT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "36T",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "CHANGI AIRPORT T2",
                    bottomFont: "Hanover-8",
                    image: "plane"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36T",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "36T",
                destination: "TERMINATES AT CHANGI AIRPORT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "36T",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "CHANGI AIRPORT T2",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36T",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    43: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "UPP EAST COAST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "Upp East Coast",
                    topFont: "Hanover-GoAhead14:7",
        
                    serviceNumber: "43"
                },
                {
                    renderType: "message",
                    text: "43",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "43"
                },
                {
                    renderType: "message",
                    text: "43",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                    renderType: "destScrollWithImage2",
                    serviceNumber: "43e",
                    top: "Marine",
                    topFont: "Lecip-GoAhead8:6:1",
                    bottom: "Parade",
                    bottomFont: "Lecip-GoAhead8:6:1",
                    image: "ExpressLogo-49"
                },
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "43e",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "MARINE PARADE RD (OPP BLK 72)",
                    bottomFont: "Hanover-7:3",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "Lecip-GoAhead20:9",
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
                    renderType: "destScrollWithImage",
                    serviceNumber: "43e",
                    top: "Punggol",
                    topFont: "Hanover-GoAhead14:6",
                    image: "ExpressLogo-49"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "Lecip-GoAhead20:9",
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
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43M",
                font: "Lecip-GoAhead20:9",
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
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43M",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "44": { // Referred from Citaro
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "44",
                destination: "AIRPORT BLVD",
                destinationFont: "Hanover-10",
                scrolls: [  
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "44",
                    top: "Airport Blvd",
                    topFont: "Lecip-GoAhead16:10",
                },
                {
                    renderType: "message",
                    text: "44",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "44",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "44",
                destination: "PUNGGOL COAST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol Coast",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "44"
                },   
                {
                    renderType: "message",
                    text: "44",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },              
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "44",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Sims Ave",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "62"
                },
                {
                    renderType: "message",
                    text: "62",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "62"
                },
                {
                    renderType: "message",
                    text: "62",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "62A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "ALJUNIED MRT",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62A",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Tampines",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "68"
                },
                {
                    renderType: "message",
                    text: "68",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "68",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "68"
                },
                {
                    renderType: "message",
                    text: "68",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        }
    },
    "68A": { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68A",
                destination: "TAMPINES INT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "68A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "TAMPINES INT",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68A",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "68B": { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68B",
                destination: "TAMPINES AVE 11",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "68B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "TAMPINES AVE 11",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "68B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "REEBONZ BLDG",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68B",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Serangoon MRT",
                    topFont: "Hanover-GoAhead14:7",
        
                    serviceNumber: "82"
                },
                {
                    renderType: "message",
                    text: "82",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "82",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "82",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "82"
                },
                {
                    renderType: "message",
                    text: "82",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "82",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Sengkang",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "83"
                },
                {
                    renderType: "message",
                    text: "83",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "83",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "83"
                },
                {
                    renderType: "message",
                    text: "83",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        }
    },
    "83T": { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83T",
                destination: "SENGKANG INT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "83T",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "SENGKANG INT",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83T",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "84G": {
        1: {
            front: {
                    renderType: "standardService",
                    serviceNumber: "84G",
                    destination: "PUNGGOL via Sentul",
                    destinationFont: "Mobitec-7:5:2",
                    scrolls: [
                    {
                        renderType: "destScroll",
                        top: "Punggol",
                        topFont: "Lecip-GoAhead16:10",
            
                        serviceNumber: "84G"
                    },
                    {
                        renderType: "destScroll",
                        top: "via Sentul Cres",
                        topFont: "Hanover-GoAhead14:7",
            
                        serviceNumber: "84G"
                    },
                ],
                scrollFont: "Hanover-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "84G",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "84W": {
        1: {
            front: {
                    renderType: "standardService",
                    serviceNumber: "84W",
                    destination: "PUNGGOL via SIT",
                    destinationFont: "Mobitec-7:5:2",
                    scrolls: [
                    {
                        renderType: "destScroll",
                        top: "Punggol",
                        topFont: "Lecip-GoAhead16:10",
            
                        serviceNumber: "84W"
                    },
                    {
                        renderType: "destScroll",
                        top: "via SIT Punggol ",
                        topFont: "Hanover-GoAhead14:7",
            
                        serviceNumber: "84W"
                    },
                ],
                scrollFont: "Hanover-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "84W",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Yishun",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "85"
                },
                {
                    renderType: "message",
                    text: "85",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "85",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "85"
                },
                {
                    renderType: "message",
                    text: "85",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "85A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "sengkang east road",
                    bottomFont: "Lecip-GoAheadShortTripNonsenseFont",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "85A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "SENGKANG COMMUNITY HUB",
                    bottomFont: "Lecip-GoAhead8:4",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85A",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    104: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "104",
                destination: "WOODLEIGH",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Woodleigh",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "104"
                },
                {
                    renderType: "message",
                    text: "104",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "104",
                font: "Lecip-GoAhead20:12",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "104",
                destination: "PUNGGOL COAST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol Coast",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "104"
                },
                {
                    renderType: "message",
                    text: "104",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "104",
                font: "Lecip-GoAhead20:12",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Changi Business Park",
                    topFont: "Hanover-GoAhead14:6",
        
                    serviceNumber: "118"
                },
                {
                    renderType: "message",
                    text: "118",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "Lecip-GoAhead20:9",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "118",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "118"
                },
                {
                    renderType: "message",
                    text: "118",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "Lecip-GoAhead20:9",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "118A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "SIMEI AVE",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "118A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "ite coll east adm blk",
                    bottomFont: "Lecip-GoAheadShortTripNonsenseFont",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118A",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "118B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118B",
                destination: "TPE (BEF PUNGGOL RD)",
                destinationFont: "LECIP-7:5",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "118B",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAheadShortTripNonsenseFont",
                    bottom: "TPE (BEF PUNGGOL RD)",
                    bottomFont: "Lecip-GoAheadShortTripNonsenseFont",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118B",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Kovan",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "119"
                },
                {
                    renderType: "message",
                    text: "119",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "Lecip-GoAhead20:9",
                spacing: 3
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "119",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "119"
                },
                {
                    renderType: "message",
                    text: "119",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "Lecip-GoAhead20:9",
                spacing: 3
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Ang Mo Kio",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "136"
                },
                {
                    renderType: "message",
                    text: "136",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService2",
                serviceNumber: "",
                destination: "TO",
                destinationFont: "LECIP-7:5",
                scrolls: [
                {
                    renderType: "logo",
                    text: "Go Ahead Logo",
                    image: "136Rear",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "136"
                },
                {
                    renderType: "message",
                    text: "136",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService2",
                serviceNumber: "",
                destination: "TO",
                destinationFont: "LECIP-6:3",
                scrolls: [
                {
                    renderType: "logo",
                    text: "Go Ahead Logo",
                    image: "136Rear",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "354"
                },
                {
                    renderType: "message",
                    text: "354",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "354",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "358"
                },
                {
                    renderType: "message",
                    text: "358",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "358",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "358T": { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "358T",
                destination: "PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "358T",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "PASIR RIS INT",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "358T",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    359: { //Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "359",
                destination: "PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "359"
                },
                {
                    renderType: "message",
                    text: "359",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "359",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "359T": { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "359T",
                destination: "PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "359T",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "PASIR RIS INT",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "359T",
                font: "Lecip-GoAhead20:6",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "381"
                },
                {
                    renderType: "message",
                    text: "381",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "381",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "382G"
                },
                {
                    renderType: "destScroll",
                    top: "via Sumang Lane ",
                    topFont: "Hanover-GoAhead14:6:2",
            
                    serviceNumber: "382G"
                },
            ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382G",
                font: "Lecip-GoAhead20:6",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "382W"
                },
                {
                    renderType: "destScroll",
                    top: "via Sentul Cres ",
                    topFont: "Hanover-GoAhead14:6:2",
            
                    serviceNumber: "382W"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382W",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    "382A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382A",
                destination: "SUMANG LANE",
                destinationFont: "Lecip-GoAhead8:6:2",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "382A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "SUMANG LANE",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "382A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "BLK 226A",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Lecip-GoAhead8:6:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382A",
                font: "Lecip-GoAhead20:6",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
            
                    serviceNumber: "384"
                },
                {
                    renderType: "message",
                    text: "384",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "384",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "386"
                },
                {
                    renderType: "message",
                    text: "386",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "386",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    "386A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "386A",
                destination: "EDGEDALE PLAINS",
                destinationFont: "Lecip-GoAhead8:6:2",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "386A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "EDGEDALE PLAINS",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "386A",
                    top: "TERMINATING AT",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "BLK 682A",
                    bottomFont: "Lecip-GoAhead8:6:2",
                },
                ],
                scrollFont: "Lecip-GoAhead8:6:2"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "386A",
                font: "Lecip-GoAhead20:6",
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
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead16:10",
        
                    serviceNumber: "403"
                },
                {
                    renderType: "message",
                    text: "403",
                    font: "LECIP-19:GoAheadBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "403",
                font: "Lecip-GoAhead20:9",
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
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "518",
                    top: "Bayfront",
                    topFont: "Hanover-GoAhead14:7",
                    image: "ExpressLogo-51",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "518",
                destination: "PASIR RIS",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "518",
                    top: "Pasir Ris",
                    topFont: "Lecip-GoAhead9:6:1",
                    image: "ExpressLogo-51",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "Lecip-GoAhead20:9",
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
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "518A",
                    top: "ENDS AT",
                    topFont: "Hanover-7:5",
                    bottom: "BAYFRONT",
                    bottomFont: "Hanover-7:5",
                    image: "ExpressLogo-51"
                },
                {
                    renderType: "destScrollWithImage",
                    serviceNumber: "518A",
                    top: "SKIPS",
                    topFont: "Hanover-7:5",
                    bottom: "TAMPINES",
                    bottomFont: "Hanover-7:5",
                    image: "ExpressLogo-51"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518A",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    661: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "661",
                destination: "MARINA BOULEVARD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "661",
                    top: "Marina",
                    topFont: "Lecip-GoAhead8:6:3",
                    bottom: "Boulevard",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "661",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "661",
                destination: "PASIR RIS DRIVE 3",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "661",
                    top: "Pasir Ris Dr 3",
                    topFont: "Hanover-14:6",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "661",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    666: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "666",
                destination: "TEMASEK BLVD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "666",
                    top: "Temasek",
                    topFont: "Lecip-GoAhead8:6:3",
                    bottom: "Boulevard",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "666",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "666",
                destination: "DAMAI LRT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2", // Placeholder - TBC
                    serviceNumber: "666",
                    top: "Damai",
                    topFont: "Lecip-GoAhead8:6:2",
                    bottom: "LRT",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "666",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    673: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "673",
                destination: "TEMASEK BLVD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "673",
                    top: "Temasek",
                    topFont: "Lecip-GoAhead8:6:3",
                    bottom: "Boulevard",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "673",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "673",
                destination: "PUNGGOL POINT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "673",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead8:6:3",
                    bottom: "Point",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "673",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    678: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "678",
                destination: "TEMASEK BLVD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "678",
                    top: "Temasek",
                    topFont: "Lecip-GoAhead8:6:3",
                    bottom: "Boulevard",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "678",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "678",
                destination: "PUNGGOL CENTRAL",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "678",
                    top: "Punggol",
                    topFont: "Lecip-GoAhead8:6:3",
                    bottom: "Central",
                    bottomFont: "Lecip-GoAhead8:6:2",
                    image: "CityDirect-35:2"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "678",
                font: "Lecip-GoAhead20:9",
                spacing: 2
            }
        }
    },
    1111: {
        1: {
            front: { 
                renderType: "destScroll",
                serviceNumber: "",
                top: "Sorry!",
                topFont: "Lecip-GoAhead9:6:2",
                bottom: "Not in Service",
                bottomFont: "Lecip-GoAhead9:6:2",
            },
            rear: { 
                renderType: "message2",
                serviceNumber: "",
                top: "Not in",
                topFont: "Lecip-GoAhead7:4:2",
                bottom: "Service",
                bottomFont: "Lecip-GoAhead7:4:2",
            }
        }
    },
    2221: { 
        1: {
            front: {
                renderType: "destScrollWithImage",
                serviceNumber: "",
                top: "New Destination only format",
                    topFont: "Hanover-7:5",
                    bottom: "w.e.f June 2025",
                    bottomFont: "Hanover-7:5",
                image: "GoAheadLionHead",
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "~",
                destinationFont: "Lecip-GoAhead20:12",
                scrolls: [{
                    renderType: "logo",
                    text: "Go Ahead Logo",
                    image: "GoAheadWordingRear",
        
                    serviceNumber: ""
                },
                    ""
                ],
                scrollFont: "LECIP-7:5"
            },
        }
    },
    2222: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GO AHEAD LOGO",
                destinationFont: "Hanover-10",
                scrolls: [{ 
                    renderType: "logo",
                    text: "Go Ahead Logo",
                    image: "GoAheadLogoFull"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "~",
                destinationFont: "Lecip-GoAhead20:12",
                scrolls: [{
                    renderType: "logo",
                    text: "Go Ahead Logo",
                    image: "GoAheadWordingRear",
        
                    serviceNumber: ""
                },
                    ""
                ],
                scrollFont: "LECIP-7:5"
            },
        }
    },
    2223: { // Referred from Citaro
        1: {
            front: {
                renderType: "destScrollWithImage",
                serviceNumber: "",
                top: "Welcome to",
                topFont: "Mobitec-7:5:3",
                bottom: "Loyang Depot",
                bottomFont: "Mobitec-7:5:3",
                image: "GoAheadLogoFull",
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "~",
                destinationFont: "Lecip-GoAhead20:12",
                scrolls: [{
                    renderType: "logo",
                    text: "Go Ahead Logo",
                    image: "GoAheadWordingRear",
        
                    serviceNumber: ""
                },
                    ""
                ],
                scrollFont: "LECIP-7:5"
            },
        }
    },
    3333: {
        1: {
            front: { 
                renderType: "message",
                text: "On Charter",
                font: "Lecip-GoAhead15:14",
                spacing: 2
            },
            rear: {
                renderType: "message2",
                serviceNumber: "",
                top: "On",
                topFont: "Hanover-7:5",
                bottom: "Char€r",
                bottomFont: "Hanover-7:4",
                }
            }
        },    
    4444: {
        1: {
            front: { 
                renderType: "message",
                text: "On Test",
                font: "Lecip-GoAhead15:14",
                spacing: 2
            },
            rear: {
                renderType: "message2",
                serviceNumber: "",
                top: "On",
                topFont: "Hanover-7:5",
                bottom: "Test",
                bottomFont: "Hanover-7:4",
                }
            }
        },    
    4371: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S37",
                destination: "PROMENADE",
                destinationFont: "Lecip-GoAhead8:6:2",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "S37",
                    top: "SHUTTLE 37",
                    topFont: "Hanover-10",
                    bottom: "BISHAN - PROMENADE",
                    bottomFont: "Hanover-7:5",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S37",
                font: "Lecip-GoAhead20:9:2",
                spacing: 2
            }
        }
    },
    4372: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S37",
                destination: "BISHAN",
                destinationFont: "Lecip-GoAhead8:6:2",
                scrolls: [
                {
                    renderType: "destScrollWithImage2",
                    serviceNumber: "S37",
                    top: "SHUTTLE 37",
                    topFont: "Hanover-10",
                    bottom: "PROMENADE - BISHAN",
                    bottomFont: "Hanover-7:5",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S37",
                font: "Lecip-GoAhead20:9:2",
                spacing: 2
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TRAINING BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "#",
                    top: "Driver Under",
                    topFont: "Lecip-GoAhead8:6:3",
                    bottom: "Instruction",
                    bottomFont: "Lecip-GoAhead8:6:3",
                    image: "L-Plate"
                    },
                    {
                    renderType: "message2",
                    serviceNumber: "#",
                    top: "Training Bus",
                    topFont: "Lecip-GoAhead14:9:1",
                    image: "L-Plate"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TRAINING BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~inin`",
                    topFont: "Hanover-7:4",
                    bottom: "Bus",
                    bottomFont: "Hanover-7:5",
                },
                {
                    renderType: "message2",
                    serviceNumber: "",
                    top: "Thanks",
                    topFont: "Hanover-7:4",
                    bottom: "For",
                    bottomFont: "Hanover-7:5",
                },
                {
                    renderType: "message2",
                    serviceNumber: "",
                    top: "Your",
                    topFont: "Hanover-7:4",
                    bottom: "~ti€nc€",
                    bottomFont: "Hanover-7:3",
                },
                    
                ],
                scrollFont: "Hanover-7:5"
            }
        }
    },
    6666: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "ROUTE TRAINING",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "`",
                    top: "Route Training",
                    topFont: "Lecip-GoAhead12:9",
                    image: "GoAheadLionHead"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TRAINING BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~inin`",
                    topFont: "Hanover-7:4",
                    bottom: "Bus",
                    bottomFont: "Hanover-7:5",
                },
                {
                    renderType: "message2",
                    serviceNumber: "",
                    top: "Thanks",
                    topFont: "Hanover-7:4",
                    bottom: "For",
                    bottomFont: "Hanover-7:5",
                },
                {
                    renderType: "message2",
                    serviceNumber: "",
                    top: "Your",
                    topFont: "Hanover-7:4",
                    bottom: "~ti€nc€",
                    bottomFont: "Hanover-7:3",
                },
                    
                ],
                scrollFont: "Hanover-7:5"
            }
        }
    },
    7001: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 1",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  1",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    spacing: "2",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 1",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7002: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 2",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  2",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 2",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7003: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 3",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  3",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 3",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7004: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 4",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  4",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 4",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7005: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 5",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  5",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 5",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7006: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 6",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  6",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 6",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7007: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 7",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  7",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 7",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7008: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 8",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  8",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 8",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7009: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 9",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  9",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~ 9",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7010: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 10",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  10",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~10",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7011: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 11",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  11",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~11",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7012: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 12",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  12",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~12",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7013: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 13",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  13",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~13",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7014: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 14",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  14",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~14",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7015: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA 15",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "~  GA  15",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "~15",
                font: "Lecip-GoAhead20:6",
                spacing: 2
            }
        }
    },
    7101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  01",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 02",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  02",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 03",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  03",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 04",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  04",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 05",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  05",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 06",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  06",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 07",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  07",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 08",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  08",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "GA RIDE 09",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  GA  RIDE  09",
                    topFont: "LECIP-19:GoAheadSpecialB9Front",
                    },
                ],
                scrollFont: "Hanover-7:5"
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
                text: "LECIP 100725",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LECIP",
                topFont: "LECIP-6:3",

                bottom: "100725",
                bottomFont: "LECIP-6:3"
            }
        }
    }
}

EDSImages.GASG = {
    blank: [
        [0]
    ],
    "plane": [ // Plane Logo
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    ],
    "ChingayLogo-Full": [
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'Chingay50-Fireworks': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], 
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], 
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], 
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'flower-1': [ // Kindness Day Flower 1
        [0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    ],
    'flower 2': [ // Kindness Day Flower 2
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0], 
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1], 
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1], 
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 
        [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0], 
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0], 
        [1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1], 
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1], 
        [0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1], 
        [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0], 
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
    ],
    'SmilingFace': [ // Kindness Day Smiling Face
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
    'Merlion-1': [ 
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'Merlion-2': [ 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0], 
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'CNYOrange': [ // Orange You Take
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'Fireworks-1': [
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
    'ChristmasTree': [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'Hari-Raya': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    ],
    'Deepavali-Candle': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    'L-Plate': [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    '136Rear': [
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    ],
    'GoAheadLogoFull': [
        [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0],
        [1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0],
        [1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0],
        [1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1],
    ],
    'GoAheadLionHead': [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    ],
    'GoAheadWordingRear': [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'CityDirect-35': [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    'CityDirect-35:2': [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    'ExpressLogo-49': [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        'ExpressLogo-51': [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],            
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
        ],
}
