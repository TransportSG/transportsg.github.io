EDSFormats ['CWL (KL Area)'] = {
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

EDSData ['CWL (KL Area)'] = {
    0: {
        front: {
            renderType: "standardService",
            serviceNumber: "WIP",
            destination: "akan datang",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "WIP",
                    top: "AKAN DATANG",
                    topFont: "Tongda-16:7",
                }, 
                {
                    renderType: "destScroll",
                    serviceNumber: "WIP",
                    top: "COMING SOON",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "1000": {
        front: {
            renderType: "standardService",
            serviceNumber: "100",
            destination: "KUALA SELANGOR / HAB LEBUH PUDU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "100",
                    top: "KUALA SELANGOR",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "100",
                    top: "HAB LEBUH PUDU",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    1001: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "100",
            destination: "KUALA SELANGOR"
        }
    },
    1002: {
        front: {
            renderType: "standardService",
            serviceNumber: "100",
            destination: "HAB LEBUH PUDU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "100",
                    top: "HAB LEBUH PUDU",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "1030": {
        front: {
            renderType: "standardService",
            serviceNumber: "103",
            destination: "DAMANSARA DAMAI / HAB LEBUH PUDU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "103",
                    top: "DAMANSARA DAMAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "103",
                    top: "HAB LEBUH PUDU",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "1040": {
        front: {
            renderType: "standardService",
            serviceNumber: "104",
            destination: "WANGSA PERMAI / HAB LEBUH PUDU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "104",
                    top: "WANGSA PERMAI",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "104",
                    top: "HAB LEBUH PUDU",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "1070": {
        front: {
            renderType: "standardService",
            serviceNumber: "107",
            destination: "BESTARI JAYA / HAB LEBUH PUDU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "107",
                    top: "BESTARI JAYA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "107",
                    top: "HAB LEBUH PUDU",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "1200": {
        front: {
            renderType: "standardService",
            serviceNumber: "120",
            destination: "JINJANG UTARA / HAB LEBUH PUDU",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "120",
                    top: "JINJANG UTARA",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "120",
                    top: "HAB LEBUH PUDU",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
}

EDSExtras ['CWL (KL Area)'] = {
}

EDSImages ['CWL (KL Area)'] = {
"blank": [
    [0]
]
}
