EDSFormats.TTSG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-19:TowerB9Front",
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
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    standardService2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-19:TowerB9Front",
                    "else": "$serviceFont"
                }
            },
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$spacing"
                }
            },
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)',
                Top: 1
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
            rotateSpeed: 2600,

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
    TowerSpecialEDS: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
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
                    "$bottomFont === null": "HMobitec-9:6",
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

        text: "$text"
        
    },
    message2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$svcFont === null": "LECIP-19:TowerB9Front",
                    "else": "$svcFont"
                }
            },
            spacing: {
                $$cond: {
                    "$svcSpacing === null" : 3,
                    "else": "$svcSpacing"
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
    message3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
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
    message4: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
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
                bottom: 0
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
    message5: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
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
                bottom: 0
            }
        },
        image: {
            align: "centre-x",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    message6: { // For TEL3 opening
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$svcFont === null": "LECIP-19:TowerB9Front",
                    "else": "$svcFont"
                }
            },
            spacing: {
                $$cond: {
                    "$svcSpacing === null" : 2,
                    "else": "$svcSpacing"
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
    destScrollWithImage: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
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
                    "$topFont === null": "Hanover-Tower11:7",
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
                    "$bottomFont === null": "LECIP-7:5",
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
    twolinerear: {
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
                bottom: 1
            }
        },
        text: "$top"
    },
    twolinerear2: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 2
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: 2
            }
        },
        text: "$top"
    },
    twolinefront: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 0
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
    destScroll: { // 2px spacing for number, 1px spacing for destination
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$svcSpacing"
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
                    "else": "$topSpacing",
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
    destScroll2: { // 2px spacing for number and destination
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$svcSpacing"
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
    destScroll3: { // 1px spacing for number and destination
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 1,
                    "else": "$svcSpacing"
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
                    "else": "$topSpacing",
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
        destScroll4: { // 1px spacing for number, 2px spacing for destination
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 1,
                    "else": "$svcSpacing"
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
                    "$topSpacing === null" : 2,
                    "else": "$topSpacing",
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
    destScroll5: { // [S36] 1px spacing for svc num
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 1,
                    "else": "$svcSpacing"
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
                    "else": "$topSpacing",
                }
            },
            margin: {
                right: 'width(serviceNumber)',
                top: '1'
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
                right: 'width(serviceNumber)',
                bottom: '1'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    ExpressdestScroll: { // 6:3 font for top line
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$svcSpacing"
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
                    "else": "$topSpacing",
                }
            },
            margin: {
                right: 'width(serviceNumber)',
                top: "1"
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
                right: 'width(serviceNumber)',
                bottom: "1",
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    CDSdestScroll: { // 6:3 font for top line
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$svcSpacing"
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
                    "else": "$topSpacing",
                }
            },
            margin: {
                right: 'width(serviceNumber)',
                top: "2"
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
                right: 'width(serviceNumber)',
                bottom: "1",
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    standardServiceWithLeftImage: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 2
        },
        top: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber) - width(image)',
                Top: 1
            },
            text: "$destination",
            font: "$topFont",
            spacing: 1
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "$topFont"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont === null": "LECIP-7:5",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left,centre-y",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
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
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
    },
    'centreMessageServiceScroll': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 0,
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 0
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
    'centreMessageServiceScroll2': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 0,
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 0
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        }
    },
    '944to992': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 0,
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 2
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

EDSData.TTSG = {   
    41: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JLN ANAK BUKIT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "JLN ANAK BUKIT",
                    topFont: "Hanover-17:10",
    
                    serviceNumber: "41"
                },
                {
                    renderType: "message",
                    text: "41",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2   
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JURONG EAST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "41"
                },
                {
                    renderType: "message",
                    text: "41",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2   
            }
        }
    },
    49: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG WEST ST 42",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG WEST ST 42",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "49",
                },
                {
                    renderType: "message",
                    text: "49",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "49"
                }, 
                {
                    renderType: "message",
                    text: "49",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    }, 
    66: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "UPP BT TIMAH RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "UPP BUKIT TIMAH RD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "66",
                },
                {
                    renderType: "message",
                    text: "66",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "66"
                }, 
                {
                    renderType: "message",
                    text: "66",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    77: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "RAFFLES BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "RAFFLES BLVD",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "77"
                },
                {
                    renderType: "message",
                    text: "77",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "77"
                },
                {
                    renderType: "message",
                    text: "77",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "77F": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "RAFFLES BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "77"
                }, 
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "77"
                }, 
                {
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "77"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "77"
                },
                {
                    renderType: "message",
                    text: "77",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    78: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "CLEMENTI AVE 3",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI AVE 3",
                    topFont: "Hanover-17:10",
            
                    serviceNumber: "78"
                },
                {
                    renderType: "message",
                    text: "78",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "78",
                },
                {
                    renderType: "message",
                    text: "78",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "78A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78A",
                destination: "TANJONG PENJURU",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "TANJONG PENJURU",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "78A",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "78A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    79: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "BOON LAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [    
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "79"
                },
                {
                    renderType: "message",
                    text: "79",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [     
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "79",
                },
                {
                    renderType: "message",
                    text: "79",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "79T": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79T",
                destination: "BOON LAY",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "79T"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "79T",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    96: { // Done
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "96",
                destination: "KENT RIDGE CRES",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "KENT RIDGE CRES",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "96",
                },
                {
                    renderType: "message",
                    text: "96",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "96",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "96"
                }, 
                {
                    renderType: "message",
                    text: "96",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    }, 
    "96A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96A",
                destination: "KENT RIDGE CRES",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll4",
                    top: "KENT RIDGE CRES",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "96A",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "96A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "96B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96B",
                destination: "COMMONWEALTH AVE WEST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "message4",
                    serviceNumber: "96B",
                    top: "COMMONWEALTH AVE WEST",
                    topFont: "Hanover-12:3",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "96B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    97: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "RAFFLES BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "RAFFLES BLVD",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "97"
                },
                {
                    renderType: "message",
                    text: "97",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "97"
                },
                {
                    renderType: "message",
                    text: "97",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "97E": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "RAFFLES BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "ExpressdestScroll",
                    top: "EXPRESS",
                    topFont: "Hanover-6:3",
                    bottom: "RAFFLES BLVD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "97e"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "ExpressdestScroll",
                    top: "EXPRESS",
                    topFont: "Hanover-6:3",
                    bottom: "JURONG EAST",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "97e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "97F": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "CENTRAL BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [   
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA BAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "97"
                },
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "97"
                }, 
                {
                    renderType: "destScroll",
                    top: "CENTRAL BOULEVARD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "97"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "(e) CENTRAL BOULEVARD",
                destinationFont: "Mobitec-7:4",
                scrolls: [   
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA BAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "97e"
                },
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "97e"
                }, 
                {
                    renderType: "destScroll",
                    top: "CENTRAL BOULEVARD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "97e"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    98: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG PIER WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                       
                {
                    renderType: "destScroll2",
                    top: "JURONG PIER WAY",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "98"
                },
                {
                    renderType: "message",
                    text: "98",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "98",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "JUR. PIER",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "98"
                },
                {
                    renderType: "message",
                    text: "98",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "98",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "JUR`EAST",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "98A": { // Check
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98A",
                destination: "CORPORATION RD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "CORPORATION RD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "98A"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "98A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "98B": { // Check
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98B",
                destination: "JURONG PIER WAY",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "JURONG PIER WAY",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "98B"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "98B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "98M": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "CORPORATION RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                          
                {
                    renderType: "destScroll2",
                    top: "CORPORATION RD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "98M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "98M"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    106: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "106"
                }, 
                {
                    renderType: "message",
                    text: "106",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "106"
                }, 
                {
                    renderType: "message",
                    text: "106",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "106A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106A",
                destination: "COMMONWEALTH AVE WEST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "message4",
                    serviceNumber: "106A",
                    top: "COMMONWEALTH AVE WEST",
                    topFont: "Hanover-12:3",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "106A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "106F": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [ 
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "106"
                },
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA BAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "106"
                }, 
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "106"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [      
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA BAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "106"
                },
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "106"
                }, 
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "106"
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    143: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "TOA PAYOH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TOA PAYOH",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "143"
                },
                {
                    renderType: "message",
                    text: "143",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "143"
                },
                {
                    renderType: "message",
                    text: "143",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "143M": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143M",
                destination: "TPANDAN GARDENS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "PANDAN GARDENS",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "143M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "143M",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "143M"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    167: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "167"
                },
                {
                    renderType: "message",
                    text: "167",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "167"
                },
                {
                    renderType: "message",
                    text: "167",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "167F": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [        
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "167"
                },
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "COLLYER QUAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "167"
                },    
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "167"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [    
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "167"
                },  
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "ESPLANADE DR",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "167"
                },
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "167"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    169: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "ANG MO KIO",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "ANG MO KIO",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "169"
                }, 
                {
                    renderType: "message",
                    text: "169",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "169"
                }, 
                {
                    renderType: "message",
                    text: "169",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "169A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169A",
                destination: "YISHUN AVE 2",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 2",
                    topFont: "Hanover-17:10",
    
                    serviceNumber: "169A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "169A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "169B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169B",
                destination: "WOODLANDS AVE 8",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "WOODLANDS AVE 8",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "169B"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "169B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    171: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "UPP BT TIMAH RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "UPP BT TIMAH RD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "171"
                },
                {
                    renderType: "message",
                    text: "171",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "171"
                },
                {
                    renderType: "message",
                    text: "171",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    173: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "173"
                },
                {
                    renderType: "message",
                    text: "173",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "173",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "CLEMENTI",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "173"
                },
                {
                    renderType: "message",
                    text: "173",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "173",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "173A": { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173A",
                destination: "BUKIT BATOK EAST AVE 4",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT BATOK EAST AVE 4",
                    topFont: "Hanover-12:3",
    
                    serviceNumber: "173A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "173A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    177: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "JELEBU RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JELEBU RD",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "177"
                },
                {
                    renderType: "message",
                    text: "177",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 17",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "message3",
                    serviceNumber: "",
                    top: "177",
                    topFont: "LECIP-TowerRear10:7",
                    bottom: "BUKIT",
                    bottomFont: "Hanover-5:3"
                },
                {
                    renderType: "message3",
                    serviceNumber: "",
                    top: "177",
                    topFont: "LECIP-TowerRear10:7",
                    bottom: "PANJANG",
                    bottomFont: "Hanover-5:3"
                },
                ],
                scrollFont: "Hanover-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "177"
                },
                {
                    renderType: "message",
                    text: "177",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "177",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    183: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "SCIENCE PARK RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "SCIENCE PARK RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "183"
                },
                {
                    renderType: "message",
                    text: "183",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "183"
                },
                {
                    renderType: "message",
                    text: "183",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "183B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183B",
                destination: "TOH TUCK AVE",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "TOH TUCK AVE",
                    topFont: "Hanover-17:10",
    
                    serviceNumber: "183B"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "183B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    189: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "CLEMENTI AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI AVE 1",
                    topFont: "Hanover-17:10",
            
                    serviceNumber: "189"
                },
                {
                    renderType: "message",
                    text: "189",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "189"
                },
                {
                    renderType: "message",
                    text: "189",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "189A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189A",
                destination: "BUKIT BATOK ST 23",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT BATOK ST 23",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "189A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "189A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    282: { // Done
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "282",
                destination: "CLEMENTI WEST ST 2",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI WEST ST 2",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "282",
                },
                {
                    renderType: "message",
                    text: "282",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "282",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "282",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "282"
                },
                {
                    renderType: "message",
                    text: "282",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "282",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    284: { // Bomb
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "284",
                destination: "CLEMENTI AVE 4",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "CLEMENTI AVE 4",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "284",
                },
                {
                    renderType: "message",
                    text: "284",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "284",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "284",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "284"
                }, 
                {
                    renderType: "message",
                    text: "284",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "284",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    285: { // Add Big Number
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "285",
                destination: "PANDAN LOOP",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "PANDAN LOOP",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "285",
                },
                {
                    renderType: "message",
                    text: "285",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "285",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "285",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "285"
                },
                {
                    renderType: "message",
                    text: "285",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "285",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    333: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "333",
                destination: "JURONG EAST ST 32",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST ST 32",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "333"
                },
                {
                    renderType: "message",
                    text: "333",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "333",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "333",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "333"
                },
                {
                    renderType: "message",
                    text: "333",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "333",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    334: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "334",
                destination: "JURONG EAST ST 32",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST ST 42",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "334"
                },
                {
                    renderType: "message",
                    text: "334",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "334",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "334"
                },
                {
                    renderType: "message",
                    text: "334",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    335: { // Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "335",
                destination: "JURONG EAST ST 42",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST ST 42",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "335"
                },
                {
                    renderType: "message",
                    text: "335",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "335",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "335",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "335"
                },
                {
                    renderType: "message",
                    text: "335",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "335",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    452: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "452",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "452"
                }, 
                {
                    renderType: "message",
                    text: "452",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "$52",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "452",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "452"
                },
                {
                    renderType: "message",
                    text: "452",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "$52",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    453: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "453",
                destination: "JLN ANAK BUKIT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "JLN ANAK BUKIT",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "453"
                },
                {
                    renderType: "message",
                    text: "453",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "$53",
                font: "LECIP-TowerRear17:10",
                spacing: 1   
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "453",
                destination: "TENGAH",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "453"
                },
                {
                    renderType: "message",
                    text: "453",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "$53",
                font: "LECIP-TowerRear17:10",
                spacing: 1   
            }
        }
    },
    651: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "651",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "MARINA BLVD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "651"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "651",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "651",
                destination: "JURONG WEST AVE 3",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "JURONG WEST AVE 3",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "651"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "651",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    653: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "MARINA BLVD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "653"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "HILLVIEW AVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "HILLVIEW AVE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "653"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    656: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "SHENTON WAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "CANBERRA RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "656F": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [  
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                },
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "COLLYER QUAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                },                  
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "SHENTON WAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [   
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                },  
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "ESPLANADE DR",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                },                 
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "CANBERRA RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "656"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    657: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "MARINA BLVD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "657"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "JURONG WEST AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "JURONG WEST AVE 1",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "657"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    663: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "SHENTON WAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "YISHUN AVE 6",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "663F": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [  
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                },
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "COLLYER QUAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                },                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "SHENTON WAY",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [ 
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                },  
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "ESPLANADE DR",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                },                       
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "YISHUN AVE 6",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "663"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    670: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "MARINA BLVD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "670"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "YISHUN AVE 7",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "YISHUN AVE 7",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "670"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    674: { // Done
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "674",
                destination: "MARINA BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "MARINA BLVD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "674"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService2",
                serviceNumber: "674",
                destination: "TENGAH DR",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "CDSdestScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-5:3",
                    bottom: "TENGAH DR",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "674"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    801: { // Done
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "801",
                destination: "YISHUN AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 1",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "801",
                },
                {
                    renderType: "message",
                    text: "801",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "801",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "801",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "801"
                }, 
                {
                    renderType: "message",
                    text: "801",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "801",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    825: { // Add Big Number
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "825",
                destination: "LENTOR LOOP",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "LENTOR LOOP",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "825",
                },
                {
                    renderType: "message",
                    text: "825",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "825",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "825",
                destination: "YIO CHU KANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YIO CHU KANG",
                    topFont: "Hanover-17:10",
    
                    serviceNumber: "825"
                }, 
                {
                    renderType: "message",
                    text: "825",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "825",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    853: { // Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "LOR 1 GEYLANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "LOR 1 GEYLANG",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "853"
                },
                {
                    renderType: "message",
                    text: "853",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
        rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "853",
                },
                {
                    renderType: "message",
                    text: "853",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },     
    "853M": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "UPP EAST COAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "UPP EAST COAST",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "853M",
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
        rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "853M",
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },   
    854: { // Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "854"
                },
                {
                    renderType: "message",
                    text: "854",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "854"
                },
                {
                    renderType: "message",
                    text: "854",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },      
    "854E": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854e",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "ExpressdestScroll",
                    top: "EXPRESS",
                    topFont: "Hanover-6:3",
                    bottom: "BEDOK",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "854e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    855: { // Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "855"
                },
                {
                    renderType: "message",
                    text: "855",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "855"
                },
                {
                    renderType: "message",
                    text: "855",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },      
    856: { // Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "856"
                },
                {
                    renderType: "message",
                    text: "856",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "856",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "W'LANDS",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "856"
                },
                {
                    renderType: "message",
                    text: "856",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "856",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "856A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856A",
                destination: "WOODLANDS CENTRE RD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "message4",
                    serviceNumber: "856A",
                    top: "WOODLANDS CENTRE RD",
                    topFont: "Hanover-12:3",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "856A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "856B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856B",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "CANBERRA RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "856B",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "856B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "856C": { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856C",
                destination: "ADM RD WEST",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "ADM RD WEST",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "856C",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "856¢",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    857: { // Add Big Number
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "857",
                destination: "TEMASEK AVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TEMASEK AVE",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "857",
                },
                {
                    renderType: "message",
                    text: "857",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "857"
                },
                {
                    renderType: "message",
                    text: "857",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    "857A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857A",
                destination: "YIO CHU KANG RD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "YIO CHU KANG RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "857A",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "857A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "857B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "TEMASEK AVE",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "TEMASEK AVE",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "857B",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },  
    "857F": { // Done
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "857",
                destination: "STAMFORD RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "857"
                }, 
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "857"
                }, 
                {
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "Hanover-17:10",
    
                    serviceNumber: "857"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "(B) STAMFORD RD",
                destinationFont: "Mobitec-7:4",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "857B"
                }, 
                {
                    renderType: "destScroll",
                    top: "SKIP",
                    topFont: "Hanover-8:5:1",
                    bottom: "MARINA CENTRE",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "857B"
                }, 
                {
                    renderType: "destScroll2",
                    top: "STAMFORD RD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "857B"
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    }, 
    858: { // Add Big Number
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "858",
                destination: "PTB 1 BASEMENT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "PTB 1 BASEMENT",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "858",
                },
                {
                    renderType: "message",
                    text: "858",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "858"
                },
                {
                    renderType: "message",
                    text: "858",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    "858A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858A",
                destination: "YISHUN AVE 2",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "YISHUN AVE 2",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "858A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "858A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "858B": { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858B",
                destination: "JALAN KAYU",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "JLN KAYU",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "858B"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "858B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    859: { // Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "859"
                },
                {
                    renderType: "message",
                    text: "859",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: { 
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "859"
                },
                {
                    renderType: "message",
                    text: "859",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "859A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859A",
                destination: "SEMBAWANG DR",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG DR",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "859A"
                },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: { // Done
            front: {
                renderType: "standardService",
                serviceNumber: "859A",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "859A"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "859B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859B",
                destination: "SEMBAWANG DR",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG DR",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "859B"
                },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: { // Done
            front: {
                renderType: "standardService",
                serviceNumber: "859B",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "859B"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "859T": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859T",
                destination: "YISHUN",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "859T"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "859T",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    861: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "861",
                destination: "YISHUN RING RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "YISHUN RING RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "861"
                },
                {
                    renderType: "message",
                    text: "861",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "861",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "KHATIB",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "861",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [          
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "861"
                },
                {
                    renderType: "message",
                    text: "861",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "861",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "S'WANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "861A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "861A",
                destination: "YISHUN RING RD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "YISHUN RING RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "861A"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "861A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "861B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "861B",
                destination: "CANBERRA MRT",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "CANBERRA LK",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "861B"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "861B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "861M": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "861M",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "861M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "861M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    870: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "870"
                },
                {
                    renderType: "message",
                    text: "870",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "870",
                },
                {
                    renderType: "message",
                    text: "870",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    871: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "871",
                destination: "UPP BT TIMAH RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "UPP BT TIMAH RD",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "871"
                },
                {
                    renderType: "message",
                    text: "871",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                } 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "871",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "871",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "871"
                },
                {
                    renderType: "message",
                    text: "871",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                } 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "871",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "871A": { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "871A",
                destination: "BUKIT BATOK EAST AVE 2",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BT BATOK EAST AVE 2",
                    topFont: "Hanover-12:3",
    
                    serviceNumber: "871A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "871A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    872: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "872",
                destination: "JURONG EAST ST 32",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST ST 32",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "872"
                },
                {
                    renderType: "message",
                    text: "872",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }  
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "872",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "872",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "872"
                },
                {
                    renderType: "message",
                    text: "872",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                } 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "872",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "882": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882",
                destination: "SEMBAWANG RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "SEMBAWANG RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "882"
                },
                {
                    renderType: "message",
                    text: "882",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                } 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "882",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: { // Done
            front: {
                renderType: "standardService",
                serviceNumber: "882",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "882"
                },
                {
                    renderType: "message",
                    text: "882",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "882",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "882A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882A",
                destination: "MONTREAL LK",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "MONTREAL LK",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "882A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "882A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    883: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "YISHUN CTRL 2",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN CTRL 2",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "883"
                },
                {
                    renderType: "message",
                    text: "883",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "883"
                },
                {
                    renderType: "message",
                    text: "883",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "S'WANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "883B": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883B",
                destination: "SEMBAWANG RD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "SEMBAWANG RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "883B"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "883B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "883M": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "YISHUN AVE 5",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 5",
                    topFont: "Hanover-17:10",
        
                    serviceNumber: "883M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883M",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 1,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:10",
            
                    serviceNumber: "883M"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883M",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 1,

                bottom: "S'WANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    941: { // Done
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "941",
                destination: "BT BATOK WEST AVE 9",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BT BATOK WEST AVE 9",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "941",
                },
                {
                    renderType: "message",
                    text: "941",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "941",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "941",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "941"
                },
                {
                    renderType: "message",
                    text: "941",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                } 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "941",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    }, 
    945: { // Add Big Number
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "945",
                destination: "BT BATOK ST 34",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "BT BATOK ST 34",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "945",
                },
                {
                    renderType: "message",
                    text: "945",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$5",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "945",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:10",
    
                    serviceNumber: "945"
                },
                {
                    renderType: "message",
                    text: "945",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }, 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$5",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    947: { // Done
        1: {
            front: {
                renderType: "standardService2",
                serviceNumber: "947",
                destination: "BUKIT BATOK RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "BT BATOK RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "947",
                },
                {
                    renderType: "message",
                    text: "947",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$7",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "947",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:10",
    
                    serviceNumber: "947"
                },
                {
                    renderType: "message",
                    text: "947",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                } 
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$7",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    963: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "963"
                },
                {
                    renderType: "message",
                    text: "963",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "963"
                },
                {
                    renderType: "message",
                    text: "963",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "963E": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "ExpressdestScroll",
                    top: "EXPRESS",
                    topFont: "Hanover-6:3",
                    bottom: "HARBOURFRONT",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "963e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "ExpressdestScroll",
                    top: "EXPRESS",
                    topFont: "Hanover-6:3",
                    bottom: "WOODLANDS",
                    bottomFont: "Hanover-11:7",
            
                    serviceNumber: "963e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    965: { // Add Big Number
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "SENGKANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SENGKANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "965"
                },
                {
                    renderType: "message",
                    text: "965",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "WOODLANDS TEMP INT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS TEMP INT",
                    topFont: "Hanover-14:6",
            
                    serviceNumber: "965"
                },
                {
                    renderType: "message",
                    text: "965",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "965A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965A",
                destination: "YISHUN AVE 2",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "YISHUN AVE 2",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "965A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "965A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "965T": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965T",
                destination: "SENGKANG",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SENGKANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "965T"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "965T",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    966: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "MARINE PARADE RD",
                destinationFont: "Hanover-17:6",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "MARINE PARADE RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "966"
                },
                {
                    renderType: "message",
                    text: "966",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "966"
                },
                {
                    renderType: "message",
                    text: "966",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "966A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966A",
                destination: "MARINE PARADE RD",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "MARINE PARADE RD",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "966A"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "966A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    969: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "TAMPINES",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TAMPINES",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "969"
                },
                {
                    renderType: "message",
                    text: "969",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "969"
                },
                {
                    renderType: "message",
                    text: "969",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "969A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969A",
                destination: "YISHUN AVE 2",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll2",
                    top: "YISHUN AVE 2",
                    topFont: "Hanover-17:6",
    
                    serviceNumber: "969A"
                }, 
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "969A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    980: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "LOR 1 GEYLANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll2",
                    top: "LOR 1 GEYLANG",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "980"
                },
                {
                    renderType: "message",
                    text: "980",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "980"
                },
                {
                    renderType: "message",
                    text: "980",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    981: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SENOKO LOOP",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SENOKO LOOP",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "981"
                },
                {
                    renderType: "message",
                    text: "981",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-17:11",
        
                    serviceNumber: "981"
                },
                {
                    renderType: "message",
                    text: "981",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                }
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    984: { // Bomb
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "984",
                destination: "WOODLANDS RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "WOODLANDS RD",
                    topFont: "Hanover-17:6",
            
                    serviceNumber: "984"
                },
                {
                    renderType: "message",
                    text: "984",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "984",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "984",
                },
                {
                    renderType: "message",
                    text: "984",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "984A": { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "984",
                destination: "BRICKLAND RD",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "BRICKLAND RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "984A",
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "984A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    990: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "JURONG GATEWAY RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "JURONG GATEWAY RD",
                    topFont: "Hanover-14:6:2",
        
                    serviceNumber: "990"
                },
                {
                    renderType: "message",
                    text: "990",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "990"
                },
                {
                    renderType: "message",
                    text: "990",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
   992: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "992"
                }, 
                {
                    renderType: "message",
                    text: "992",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "992"
                },
                {
                    renderType: "message",
                    text: "992",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Off Service",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    {
                        renderType: "message",
                        text: "~ Off Service",
                        font: "Hanover-Tower19:11",
                        spacing: 2
                    },
    
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    1112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SG BUS Logo",
                destinationFont: "Mobitec-7:7",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "SGUS",
                    topFont: "SGBusLogo-Mobitec",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "message",
                text: " ",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Spare Bus",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    {
                        renderType: "message",
                        text: "Spare  Bus",
                        font: "Hanover-Tower19:11",
                        spacing: 2
                    },
    
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: 'twolinerear',
                top: "Spare",
                topFont: "Hanover-7:5", 

                bottom: "Bus",
                bottomFont: "Hanover-7:5"
            }
        }
    },
    3333: {
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
                renderType: "standardService",
                serviceNumber: "",
                destination: "BLANK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [        
                {
                    renderType: "destScroll",
                    top: "",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: ""
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
        4361: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S36",
                destination: "S36 HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [ 
                {
                    renderType: "destScroll5",
                    top: "SHUTTLE 3^",
                    topFont: "Hanover-7:5",
                    bottom: "BISHAN - HARBOURFRONT",
                    bottomFont: "Hanover-10:5",
            
                    serviceNumber: "Š36"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "Š36",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    4362: { // Done
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S36",
                destination: "S36 BISHAN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [ 
                {
                    renderType: "destScroll5",
                    top: "SHUTTLE 3^",
                    topFont: "Hanover-7:5",
                    bottom: "HARBOURFRONT - BISHAN",
                    bottomFont: "Hanover-10:5",
            
                    serviceNumber: "Š36"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "Š36",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "On Test",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    {
                        renderType: "message",
                        text: "On Test",
                        font: "Hanover-Tower19:11",
                        spacing: 2
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: 'twolinerear',
                top: "On",
                topFont: "Hanover-7:5", // check font

                bottom: "Test",
                bottomFont: "Hanover-7:5"
            }
        }
    },
    5000: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Route Familiarisation Training",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    {
                        renderType: "twolinerear",
                        top: "Route Familiarisation",
                        topFont: "Hanover-8:4",
                        topSpacing: 1,
        
                        bottom: "Training",
                        bottomFont: "Hanover-8:4",
                        bottomSpacing: 1,
                    },
    
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinerear",
                top: "Route",
                topFont: "Hanover-8:3",
                topSpacing: 1,

                bottom: "Fam Trg",
                bottomFont: "Hanover-8:3",
                bottomSpacing: 1,
            }
        }
    },
    5001: {
        1: {
            front: {
                renderType: "message",
                text: "NSL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "NSL",
                topFont: "Hanover-8:4",

                bottom: "Bridging",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    5002: {
        1: {
            front: {
                renderType: "message",
                text: "EWL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "EWL",
                topFont: "Hanover-8:4",

                bottom: "Bridging",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    5003: {
        1: {
            front: {
                renderType: "message",
                text: "NEL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "NEL",
                topFont: "Hanover-8:4",

                bottom: "Bridging",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    5004: {
        1: {
            front: {
                renderType: "message",
                text: "CCL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "CCL",
                topFont: "Hanover-8:4",

                bottom: "Bridging",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    5005: {
        1: {
            front: {
                renderType: "message",
                text: "DTL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "DTL",
                topFont: "Hanover-8:4",

                bottom: "Bridging",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    5006: {
        1: {
            front: {
                renderType: "message",
                text: "TEL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "TEL",
                topFont: "Hanover-8:4",

                bottom: "Bridging",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    5007: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging A",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'destScroll',
                top: "LRT",
                topFont: "Hanover-8:4",
                bottom: "A",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5008: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging B",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'destScroll',
                top: "LRT",
                topFont: "Hanover-8:4",
                bottom: "B",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5009: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging East",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'destScroll',
                top: "LRT",
                topFont: "Hanover-8:4",
                bottom: "EAST",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5010: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging West",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'destScroll',
                top: "LRT",
                topFont: "Hanover-8:4",
                bottom: "WEST",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Black 01",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Black",
                topFont: "Hanover-8:3",
                bottom: "01",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Black 02",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Black",
                topFont: "Hanover-8:3",
                bottom: "02",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Black 03",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Black",
                topFont: "Hanover-8:3",
                bottom: "03",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Black 04",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  04",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Black",
                topFont: "Hanover-8:3",
                bottom: "04",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5104: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Blue 01",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Blue",
                topFont: "Hanover-8:3",
                bottom: "01",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5105: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Blue 02",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Blue",
                topFont: "Hanover-8:3",
                bottom: "02",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5106: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Blue 03",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Blue",
                topFont: "Hanover-8:3",
                bottom: "03",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5107: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Blue 04",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  04",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Blue",
                topFont: "Hanover-8:3",
                bottom: "04",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5108: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Brown 01",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Brown",
                topFont: "Hanover-8:3",
                bottom: "01",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5109: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Brown 02",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Blue",
                topFont: "Hanover-8:3",
                bottom: "02",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5110: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Brown 03",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Blue",
                topFont: "Hanover-8:3",
                bottom: "03",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Brown 04",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  0$",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Blue",
                topFont: "Hanover-8:3",
                bottom: "04",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Green 01",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Green",
                topFont: "Hanover-8:3",
                bottom: "01",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5113: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Green 02",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Green",
                topFont: "Hanover-8:3",
                bottom: "02",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5114: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Green 03",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Green",
                topFont: "Hanover-8:3",
                bottom: "03",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5115: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT Green 04",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  04",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'destScroll',
                top: "TT Green",
                topFont: "Hanover-8:3",
                bottom: "04",
                bottomFont: "Hanover-10",
           
                serviceNumber: ""
            }
        }
    },
    5200: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 1",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "TT01",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 02",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 2",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT02",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5202: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 03",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 3",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT03",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5203: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 04",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 4",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT04",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5204: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 05",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 5",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT05",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5205: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 06",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 6",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT06",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5206: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 07",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 7",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT07",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5207: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 08",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 8",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT08",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5208: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 09",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 9",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT09",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5209: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 10",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 0",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT10",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5210: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 11",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 1",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT11",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5211: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 12",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 2",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT12",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5212: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 13",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 3",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT13",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5213: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 14",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 4",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT14",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5214: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 15",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 5",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT15",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5215: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 16",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 6",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT16",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5216: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 17",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 7",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT17",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5217: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 18",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 8",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT18",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5218: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 19",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 9",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT19",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5219: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 20",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 0",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT20",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5220: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 21",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 1",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT21",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5221: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 22",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 2",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT22",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5222: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 23",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 3",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT23",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5223: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 24",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 4",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT24",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5224: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 25",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 5",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT25",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5225: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 26",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 6",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT26",
                font: "Hanover-10",
                spacing: 2
            }
        }
    },
    5300: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B1",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b1",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b1",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5301: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus  B2",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b2",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b2",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5302: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B3",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b3",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b3",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5303: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B4",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b4",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b4",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5304: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B5",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b5",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b5",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5305: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B6",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b6",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b6",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5306: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B7",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b7",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b7",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5307: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B8",
                destinationFont: "Mobitec-7:4",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b8",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b8",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5308: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Crew Bus B9",
                destinationFont: "Mobitec-7:4",
                scrolls: [
                {
                    renderType: "message2",
                    serviceNumber: "b9",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b9",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5400: { // Done 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TTS Hotel Ferry",
                destinationFont: "Mobitec-7:4",
                scrolls: [
                {
                    renderType: "message2",
                    serviceNumber: "",
                  
                    top: "TTS  - Hotel Ferry",
                    topFont: "Hanover-8:4",
                  
                    bottom: "Employee Shuttle",
                    bottomFont: "Hanover-7:5",
                  
                    image: "DDBusIcon"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLACK 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "",
                    topFont: "Hanover-Tower19:11",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            }
        }
    },
    5500: { // Done 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TEL 3 Opening Event",
                destinationFont: "Mobitec-7:4",
                scrolls: [
                {
                    renderType: "message2",
                    serviceNumber: "",
                  
                    top: "TEL 3 Opening Event",
                    topFont: "Hanover-7:5",
                  
                    bottom: "Caldecott ⇔ Stevens",
                    bottomFont: "Hanover-10:3",
                
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLACK 01",
                destinationFont: "Hanover-10",
                scrolls: [
                {
                    renderType: "message6",
                    serviceNumber: "",
                    top: "TEL 3",
                    topFont: "Hanover-8:3",

                    bottom: "CDT-STV",
                    bottomFont: "Hanover-7:3"
                    },
                ],
                scrollFont: "Hanover-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [  
                {
                    renderType: "destScroll",
                    top: "",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: ""
                },
                {
                    renderType: "destScroll",
                    top: "",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: ""
                },   
                {
                    renderType: "destScroll",
                    top: "",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: ""
                },   
                {
                    renderType: "destScroll",
                    top: "",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: ""
                },                     
                {
                    renderType: "destScroll",
                    top: "UPP BT TIMAH RD",
                    topFont: "Hanover-17:6",
        
                    serviceNumber: "974"
                },
                {
                    renderType: "destScroll",
                    top: "JOO KOON",
                    topFont: "Hanover-17:11",
    
                    serviceNumber: "974"
                }, 
                {
                    renderType: "message",
                    text: "974",
                    font: "LECIP-19:TowerBigNumber",
                    spacing: 12
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "Training  Bus",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "Training",
                topFont: "Hanover-8:3",

                bottom: "Bus",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    5998: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "BULIM DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "BULIM  DEPOT",
                    topFont: "LECIP-20:9",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinefront",
                top: "Bulim",
                topFont: "Hanover-8:4",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-8:4",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "BULIM DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "BULIM DEPOT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CREW BUS",
                    bottomFont: "Hanover-Tower7:5",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinefront",
                top: "Bulim",
                topFont: "Hanover-8:4",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-8:4",
                bottomSpacing: 1,
            }
        }
    },
    5999: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "MANDAI DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "MANDAI  DEPOT",
                    topFont: "LECIP-20:9",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinefront",
                top: "Mandai",
                topFont: "Hanover-8:4",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-8:4",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "MANDAI DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "MANDAI DEPOT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CREW BUS",
                    bottomFont: "Hanover-Tower7:5",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinefront",
                top: "Mandai",
                topFont: "Hanover-8:4",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-8:4",
                bottomSpacing: 1,
            }
        }
    },
    6666: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Tower Transit Logo",
                destinationFont: "Mobitec-7:7",
                scrolls: [ 
                    {
                       renderType: "message2",
                       serviceNumber: "",
                       top: "`",
                       topFont: "Hanover-Tower19:11",
                    },
    
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    6667: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "Welcome",
                destinationFont: "Mobitec-7:7",
                scrolls: [ 
                {
                    renderType: "message2",
                    serviceNumber: "",
                    top: "New Destination only format",
                    topFont: "Hanover-7:5",
                    bottom: "w.e.f May 2025",
                    bottomFont: "Hanover-7:5",
                    image: "TTSRoundel"
                },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "LECIP 270525",
                font: "Hanover-Tower19:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinerear',
                top: "LECIP",
                topFont: "Hanover-8:3", 

                bottom: "270525",
                bottomFont: "Hanover-8:3"
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "Bus Under Repair",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinerear',
                top: "Under",
                topFont: "Hanover-7:5", 

                bottom: "Repair",
                bottomFont: "Hanover-7:5"
            }
        }
    }
}

EDSImages.TTSG = {
    blank: [[0]
     ],
    ChangiAirportControlTower: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    DDBusIcon: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    "1Jan2025": [ // 2024 Christmas message
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    "HariRaya-2025": [ // 2025 Hari Raya
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    Chingay50Logo1: [ // Side EDS
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Chingay50Logo2: [ // Front EDS + Svc Number
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Chingay50Logo3: [ // Fireworks/Star only
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Chingay50Logo4: [ // Front EDS without svc number
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    TTSRoundel: [ //TTS Roundel
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],  
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],  
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],  
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],  
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],   
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],  
    ],
}
