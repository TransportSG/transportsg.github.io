EDSFormats ['RapidKL'] = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: {
                $$cond: {
                    "$destFont === null": "Mobitec-7:4",
                    "else": "$destFont"
                }
            },
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

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
        
    },
    destScroll: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 0
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 1
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
                    "$topFont === null": "Tongda-16:7",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
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
                    "$bottomFont === null": "Mobitec-7:4",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "right",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
        
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
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
    scrollingDest: {
        __dynamic__: (matrix, data) => {
            let serviceNum = new TextObject(data.serviceNumber, Font.fromNameString("Tongda-16:7"), new Position(0, 0), 1)
            let destination = new TextObject(data.destination, Font.fromNameString("Tongda-16:7"), new Position(matrix.width, 0), 1)

            let serviceWidth = serviceNum.takeMeasure().width + 3
            let destinationWidth = destination.takeMeasure().width

            let framesNeeded = matrix.width + destinationWidth - serviceWidth
            let currentFrame = 0

            function drawFrame(frame) {
                destination.position.x = matrix.width - frame
                matrix.clearRectangle(0, 0, matrix.width, matrix.height)

                matrix.drawText(destination)
                
                matrix.clearRectangle(0, 0, serviceWidth, matrix.height)
                matrix.drawText(serviceNum)
            }

            if (matrix === window.controllerPreview) {
                return drawFrame(matrix.width - serviceWidth - 2)
            }

            __scrollingInterval__ = setInterval(() => {
                drawFrame(currentFrame++)
                if (currentFrame === framesNeeded) currentFrame = 0
            }, 50)
        },
        text: "$serviceNumber+' '+$destination"
    }
}

EDSData ['RapidKL'] = {
    0: {
        front: {
            renderType: "standardService",
            serviceNumber: "WIP",
            destination: "akan datang",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "RAPID KL",
                    top: "Akan Datang",
                    topFont: "Mobitec-7:7",
                    bottom: "work in progress",
                    bottomFont: "Mobitec-7:4",
                },
            ]
        }
    },
    "1": {
        front: {
            renderType: "standardService",
            serviceNumber: "001",
            destination: "JOM NAIK BAS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "001",
                    top: "JOM NAIK BAS",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    2541: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "254",
            destination: "TITIWANGSA VIA CHOW KIT"
        }
    },
    4201: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "420",
            destination: "TERMINAL MALURI - TITIWANGSA"
        }
    },
    7500: {
        front: {
            renderType: "standardService",
            serviceNumber: "750",
            destination: "PASAR SENI / SEKSYEN 2",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "750",
                    top: "PASAR SENI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "750",
                    top: "SEKSYEN 2",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    7501: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "750",
            destination: "PASAR SENI - SEKSYEN 2"
        }
    },
    7531: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "753",
            destination: "UTIM PUNCAK ALAM - HENTIAN BANDAR SHAH ALAM"
        }
    },
    7711: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "771",
            destination: "DESA MENTARI - SUBANG MEWAH USJ1"
        }
    },
    8511: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "851",
            destination: "PASAR SENI - KOMPLEKS MAHKAMAH JALAN DUTA"
        }
    },
}

EDSExtras ['RapidKL'] = {
}

EDSImages ['RapidKL'] = {
"blank": [
    [0]
]
}
