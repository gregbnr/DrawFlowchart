jQuery(document).ready(function () {
//    var imported = document.createElement('script');
//    imported.src = 'jquery.flowchart.js';
//    document.head.appendChild(imported);







    //1er workflow ------------------------------------------------------------

    flowchart1 = {

//      operatorTypes: {
//          start: {
//            title: 'Operator 1',
//            inputs: {},
//            outputs: {
//              output_1: {
//                label: 'Output 1'
//              }
//            }
//          }
//      },
        operators: {
            draft: {
                top: 160,
                left: 30,
                properties: {
                    title: 'Draft Request',
                    inputs: {
                        input_1: {
                            label: 'save'
                        },
                        input_2: {
                            label: 'save'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'send'
                        },
                        output_2: {
                            label: 'save'
                        }
                    }
                }
            },
            condition: {
                top: 160,
                left: 280,
                properties: {
                    title: 'Condition',
                    inputs: {
                        input_1: {
                            label: 'send'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'Yes'
                        },
                        output_2: {
                            label: 'No'
                        }
                    }
                }
            },
            sent: {
                top: 60,
                left: 520,
                properties: {
                    title: 'Sent',
                    inputs: {
                        input_1: {
                            label: 'Yes'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'create'
                        }
                    }
                }
            },
            created: {
                top: 60,
                left: 780,
                properties: {
                    title: 'Created',
                    inputs: {
                        input_1: {
                            label: 'create'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'reject'
                        }
                    }
                }
            },
            reject: {
                top: 520,
                left: 750,
                properties: {
                    title: 'Reject',
                    inputs: {
                        input_1: {
                            label: 'reject',
                        },
                        input_2: {
                            label: 'reject',
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'save'
                        }
                    }
                }
            },
            waiting: {
                top: 300,
                left: 520,
                properties: {
                    title: 'Waiting TP Valid',
                    inputs: {
                        input_1: {
                            label: 'No'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'reject'
                        }
                    }
                }
            }
        },
        links: {
            draftToDraft: {
                fromOperator: 'draft',
                fromConnector: 'output_2',
                toOperator: 'draft',
                toConnector: 'input_1'
            },
            draftToCondition: {
                fromOperator: 'draft',
                fromConnector: 'output_1',
                toOperator: 'condition',
                toConnector: 'input_1'
            },
            conditionToSent: {
                fromOperator: 'condition',
                fromConnector: 'output_1',
                toOperator: 'sent',
                toConnector: 'input_1',
                color: 'green'
            },
            sentToCreated: {
                fromOperator: 'sent',
                fromConnector: 'output_1',
                toOperator: 'created',
                toConnector: 'input_1',
                color: 'green'
            },
            conditionToWaiting: {
                fromOperator: 'condition',
                fromConnector: 'output_2',
                toOperator: 'waiting',
                toConnector: 'input_1',
                color: 'red'
            },
            createdToReject: {
                fromOperator: 'created',
                fromConnector: 'output_1',
                toOperator: 'reject',
                toConnector: 'input_1',
                color: 'green'
            },
            waitingToReject: {
                fromOperator: 'waiting',
                fromConnector: 'output_1',
                toOperator: 'reject',
                toConnector: 'input_2',
                color: 'red'
            },
            rejectToDraft: {
                fromOperator: 'reject',
                fromConnector: 'output_1',
                toOperator: 'draft',
                toConnector: 'input_2'
            }
        }


    };


    //2e workflow -------------------------------------------------------------

    flowchart2 = {

//      operatorTypes: {
//          start: {
//            title: 'Operator 1',
//            inputs: {},
//            outputs: {
//              output_1: {
//                label: 'Output 1'
//              }
//            }
//          }
//      },
        operators: {
            save_1: {
                top: 160,
                left: 30,
                properties: {
                    title: 'Save',

                    outputs: {
                        output_1: {
                            label: 'save'
                        }
                    }
                }
            },
            ebauche_1: {
                top: 160,
                left: 280,
                properties: {
                    title: 'Ebauche',
                    inputs: {
                        input_1: {
                            label: 'save'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'save'
                        },
                        output_2: {
                            label: 'create'
                        }
                    }
                }
            },
            save_2: {
                top: 60,
                left: 520,
                properties: {
                    title: 'Save',
                    inputs: {
                        input_1: {
                            label: 'save'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'ébauche'
                        }
                    }
                }
            },
            ebauche_2: {
                top: 60,
                left: 750,
                properties: {
                    title: 'Ebauche',
                    inputs: {
                        input_1: {
                            label: 'ébauche'
                        }
                    }
                }
            },
            create: {
                top: 300,
                left: 520,
                properties: {
                    title: 'Create',
                    inputs: {
                        input_1: {
                            label: 'create'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'créée'
                        }
                    }
                }
            },

            creee: {
                top: 300,
                left: 750,
                properties: {
                    title: 'Créée',
                    inputs: {
                        input_1: {
                            label: 'créée'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'reject'
                        }
                    }
                }
            },
            reject: {
                top: 300,
                left: 1000,
                properties: {
                    title: 'Reject',
                    inputs: {
                        input_1: {
                            label: 'reject'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'ébauche'
                        }
                    }
                }
            },
            ebauche_3: {
                top: 300,
                left: 1250,
                properties: {
                    title: 'Ebauche',
                    inputs: {
                        input_1: {
                            label: 'ébauche'
                        }
                    }
                }
            }
        },
        links: {
            saveToEbauche1: {
                fromOperator: 'save_1',
                fromConnector: 'output_1',
                toOperator: 'ebauche_1',
                toConnector: 'input_1'
            },
            ebauche1ToSave2: {
                fromOperator: 'ebauche_1',
                fromConnector: 'output_1',
                toOperator: 'save_2',
                toConnector: 'input_1'
            },
            save2ToEbauche2: {
                fromOperator: 'save_2',
                fromConnector: 'output_1',
                toOperator: 'ebauche_2',
                toConnector: 'input_1'
            },
            ebauche1ToCreate: {
                fromOperator: 'ebauche_1',
                fromConnector: 'output_2',
                toOperator: 'create',
                toConnector: 'input_1'
            },
            createToCreee: {
                fromOperator: 'create',
                fromConnector: 'output_1',
                toOperator: 'creee',
                toConnector: 'input_1'
            },
            creeeToReject: {
                fromOperator: 'creee',
                fromConnector: 'output_1',
                toOperator: 'reject',
                toConnector: 'input_1'
            },
            rejectToEbauche3: {
                fromOperator: 'reject',
                fromConnector: 'output_1',
                toOperator: 'ebauche_3',
                toConnector: 'input_1'
            }
        }


    };



    //3e workflow -------------------------------------------------------------


    flowchart3 = {

//      operatorTypes: {
//          start: {
//            title: 'Operator 1',
//            inputs: {},
//            outputs: {
//              output_1: {
//                label: 'Output 1'
//              }
//            }
//          }
//      },
        operators: {
            save1_FC3: {
                top: 160,
                left: 30,
                properties: {
                    title: 'Save',
                    outputs: {
                        output_1: {
                            label: 'save'
                        }
                    }
                }
            },
            ebauche1_FC3: {
                top: 160,
                left: 220,
                properties: {
                    title: 'Ebauche',
                    inputs: {
                        input_1: {
                            label: ''
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'create'
                        },
                        output_2: {
                            label: 'send'
                        }
                    }
                }
            },
            create1_FC3: {
                top: 60,
                left: 420,
                properties: {
                    title: 'Create',
                    inputs: {
                        input_1: {
                            label: ''
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'créée'
                        }
                    }
                }
            },
            creee1_FC3: {
                top: 10,
                left: 620,
                properties: {
                    title: 'Créée',
                    inputs: {
                        input_1: {
                            label: 'créée'
                        }
                    }
                }
            },
            send1_FC3: {
                top: 220,
                left: 420,
                properties: {
                    title: 'Send',
                    inputs: {
                        input_1: {
                            label: ''
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'sent request'
                        },
                        output_2: {
                            label: '3th validation'
                        }
                    }
                }
            },

            sentRequest1_FC3: {
                top: 200,
                left: 620,
                properties: {
                    title: 'Sent Request',
                    inputs: {
                        input_1: {
                            label: ''
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'validate'
                        },
                        output_2: {
                            label: 'rejected'
                        }
                    }
                }
            },
            thirdValidation1_FC3: {
                top: 350,
                left: 620,
                properties: {
                    title: '3th validation',
                    inputs: {
                        input_1: {
                            label: ''
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'validate'
                        },
                        output_2: {
                            label: 'rejected'
                        }
                    }
                }
            },
            validate1_FC3: {
                top: 150,
                left: 900,
                properties: {
                    title: 'Validate',
                    inputs: {
                        input_1: {
                            label: 'sent request'
                        },
                        input_2: {
                            label: '3th validation'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'validate'
                        }
                    }
                }
            },
            validate2_FC3: {
                top: 150,
                left: 1100,
                properties: {
                    title: 'Validate',
                    inputs: {
                        input_1: {
                            label: 'validate'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'create'
                        }
                    }
                }
            },
            create2_FC3: {
                top: 50,
                left: 1250,
                properties: {
                    title: 'Create',
                    inputs: {
                        input_1: {
                            label: 'create'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'créée'
                        }
                    }
                }
            },
            creee2_FC3: {
                top: 50,
                left: 1450,
                properties: {
                    title: 'Créée',
                    inputs: {
                        input_1: {
                            label: 'créée'
                        }
                    }

                }
            },
            rejected1_FC3: {
                top: 400,
                left: 900,
                properties: {
                    title: 'Rejected',
                    inputs: {
                        input_1: {
                            label: 'R'
                        },
                        input_2: {
                            label: 'R'
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'ébauche'
                        }
                    }
                }
            },
            ebauche2_FC3: {
                top: 400,
                left: 1150,
                properties: {
                    title: 'Ebauche',
                    inputs: {
                        input_1: {
                            label: 'ébauche'
                        }
                    }
                }
            }
        },
        links: {
            save1ToEbauche1: {
                fromOperator: 'save1_FC3',
                fromConnector: 'output_1',
                toOperator: 'ebauche1_FC3',
                toConnector: 'input_1'
            },
            ebauche1ToCreate1: {
                fromOperator: 'ebauche1_FC3',
                fromConnector: 'output_1',
                toOperator: 'create1_FC3',
                toConnector: 'input_1'
            },
            create1ToCreee1: {
                fromOperator: 'create1_FC3',
                fromConnector: 'output_1',
                toOperator: 'creee1_FC3',
                toConnector: 'input_1'
            },
            ebauche1ToSend1: {
                fromOperator: 'ebauche1_FC3',
                fromConnector: 'output_2',
                toOperator: 'send1_FC3',
                toConnector: 'input_1'
            },
            send1ToSentRequest1: {
                fromOperator: 'send1_FC3',
                fromConnector: 'output_1',
                toOperator: 'sentRequest1_FC3',
                toConnector: 'input_1'
            },
            send1To3thValidation: {
                fromOperator: 'send1_FC3',
                fromConnector: 'output_2',
                toOperator: 'thirdValidation1_FC3',
                toConnector: 'input_1'
            },
            sentRequest1ToValidate1: {
                fromOperator: 'sentRequest1_FC3',
                fromConnector: 'output_1',
                toOperator: 'validate1_FC3',
                toConnector: 'input_1'
            },
            sentRequest1ToRejected1: {
                fromOperator: 'sentRequest1_FC3',
                fromConnector: 'output_2',
                toOperator: 'rejected1_FC3',
                toConnector: 'input_1'
            },
            validate1ToValidate2: {
                fromOperator: 'validate1_FC3',
                fromConnector: 'output_1',
                toOperator: 'validate2_FC3',
                toConnector: 'input_1'
            },
            validate2ToCreate2: {
                fromOperator: 'validate2_FC3',
                fromConnector: 'output_1',
                toOperator: 'create2_FC3',
                toConnector: 'input_1'
            },
            create2ToCreee2: {
                fromOperator: 'create2_FC3',
                fromConnector: 'output_1',
                toOperator: 'creee2_FC3',
                toConnector: 'input_1'
            },
            thirdValidationToValidate1: {
                fromOperator: 'thirdValidation1_FC3',
                fromConnector: 'output_1',
                toOperator: 'validate1_FC3',
                toConnector: 'input_2',
                color: 'blue'
            },
            thirdValidationToRejected1: {
                fromOperator: 'thirdValidation1_FC3',
                fromConnector: 'output_2',
                toOperator: 'rejected1_FC3',
                toConnector: 'input_2'
            },
            rejected1ToEbauche2: {
                fromOperator: 'rejected1_FC3',
                fromConnector: 'output_1',
                toOperator: 'ebauche2_FC3',
                toConnector: 'input_1'
            }
        }


    };

    //myFlowmyFlowChartList est un tableau contenant des clés dont leurs valeurs sont les flowcharts créés 

    var myFlowChartList = {'fc1': flowchart1, 'fc2': flowchart2, 'fc3': flowchart3};


    //DrawFlowchart() est une fonction ayant en paramètre une clé de myFlowChartList juste au-dessus
    //Elle affiche un workflow en fonction de sa clé

    function DrawFlowchart(flw_id) {
        // la variable flowchart va récupérer tous les workflows créés et stockés dans la liste myFlowChartList.
        var flowchart = myFlowChartList[flw_id];
        //.flowchart est une méthode ayant plusieurs paramètres grâce au plugin flowchart.js
        //Ici la méthode permet de récupérer la data des différents flowcharts créés
        jQuery('#example').flowchart({
            data: flowchart
        });
        // setData permet de rendre chaque flowchart indépendant
        //Sinon toutes les fonctions que l'on crée par la suite s'appliquera sur tous les workflows
        //A la création d'un élément par exemple, l'élément créé s'affichera sur tous les workflows
        //Grâce à setData, ils seront indépendants
        jQuery('#example').flowchart('setData', flowchart);
    }



//Création du tableau de Workflows 



//    console.log(myFlowChartList[Object.keys(myFlowChartList)[1]].operators);
//    console.log(myFlowChartList[Object.keys(myFlowChartList)[0]].operators.draft.properties.title);

    var myTable = "<table id='dataTable'>";
    myTable += "<thead><tr><th></th><th>N°Workflow</th><th>Nom Workflow</th><th>Statut du Worflow</th></tr></thead>";
    myTable += "<tbody>";
    //On boucle sur la liste des workflows créés qui en contient actuellement 3
    for (var i = 0; i < Object.keys(myFlowChartList).length; i++) {
        //Création de 3 tr
        myTable += "<tr class='toto'>";
        //Création de 3 radio-boutons ayant en attribut id_flowchart
        //l'attribut va chercher la clés des différents workflows pour ainsi les différencier par la suite
        myTable += "<td><input class='btnRdo' type='radio' id_flowchart='" + Object.keys(myFlowChartList)[i] + "' name='gender'></td>";
        myTable += "<td>Workflow " + (i + 1) + "</td>";
        myTable += "<td>flow" + (i + 1) + "</td>";
        // idFC retourne 3 listes des ID des opérateurs des 3 flowcharts
        var idFC = Object.keys(myFlowChartList[Object.keys(myFlowChartList)[i]].operators);
        myTable += "<td>";
        //On bouble sur la longueur des 3 listes d'ID
        for (var j = 0; j < idFC.length; j++) {
            //tmp prend les titres des opérateurs en fonction de l'id de la liste des id des opérateurs, par workflow
            var tmp = myFlowChartList[Object.keys(myFlowChartList)[i]].operators[idFC[j]].properties.title;
            //Affichage des titres de chaque opérateur en fonction du workflow dans la dernière colonne
            myTable += tmp + "->";
        }
        myTable = myTable.slice(0, -2); //supprime les 2 derniers caractères de la ligne
        myTable += "</td>";
    }

    myTable += "</tr></tbody></table>";
    //Affichage du tableau dans la partie HTML
    jQuery('#tableau').html(myTable);
    //Pour chaque tr de la classe toto, on va chercher les radio-boutons ayant en attribut 'id_flowchart'
    //Au clic du radio-bouton, on applique la fonction Drawflowchart ayant en paramètre la clé d'un workflow
    jQuery('tr.toto').each(function () {
        var id_fl = jQuery(this).find('input:radio').attr('id_flowchart');
        jQuery(this).change(function () {
            DrawFlowchart(id_fl);
        });
    });







//    jQuery('#example').flowchart('addClassOperator', 'condition', 'condition');
//    jQuery('#example').flowchart('colorizeLink', 'conditionToWaiting', 'red');

    var operatorI = 0;
    jQuery('#create_operator').click(function () {
        var operatorId = 'created_operator_' + operatorI;
        var operatorData = {
            top: 280,
            left: 980,
            properties: {
                title: 'Operator ' + (operatorI + 7),
                inputs: {
                    input_1: {
                        label: 'Input 1',
                        multiple: true
                    }
                },
                outputs: {
                    output_1: {
                        label: 'Output 1',
                        multiple: true
                    }
                }
            }
        };

        operatorI++;



        jQuery('#example').flowchart('addOperator', operatorData);
    });




    jQuery('#delete_selected_button').click(function () {
        jQuery('#example').flowchart('deleteSelected');
    });


//    jQuery(window).load(function(){
//        reloadFlowchart();
//       
//        
//    });

//reloadFlowchart permet d'afficher le code de la variable sélectionnée
//Ce dernier se met à jour à chaque modification de la page web

    function reloadFlowchart() {
        var data1 = jQuery('#example').flowchart('getData');
        var data2 = JSON.stringify(data1, 4, '\t');
//        var data2 = new Data(data1);
//        console.log(data2);
//        console.log(data2.toString());
        jQuery('#block').text(data2);
    };

    jQuery('#param_link_button').click(function () {
        jQuery('#example').flowchart({canUserEditLinks: true}); //Permet de rendre paramétrable les liens
    });


    jQuery('#clone_operator').click(function () {
        var operatorId = 'created_operator_' + operatorI;

        var clonageId = jQuery('#example').flowchart('getSelectedOperatorId');
        var clonageData = jQuery('#example').flowchart('getOperatorData', clonageId);

        operatorI++; //On lui ajoute +1 pour différencier les différents clones.

        jQuery('#example').flowchart('addOperator', clonageData);
//        $('#example').flowchart('addOperator', clonageData2);
//        reloadFlowchart();

//    var setTitle = jQuery('#example').flowchart('getOperatorTitle', clonageId);
//        jQuery('#draft').append(setTitle+' ');

    });


});










$(document).ready( function () {
  var oTable = $('#dataTable').dataTable({
    "bJQueryUI": true,
    "sDom": 'l<"H"Rf>t<"F"ip>'
  });
  $(document).contextmenu({
    delegate: ".toto",
    menu: [
      {title: "Filter", cmd: "filter", uiIcon: "ui-icon-volume-off ui-icon-filter"},
      {title: "Remove filter", cmd: "nofilter", uiIcon: "ui-icon-volume-off ui-icon-filter"}
	],
	select: function(event, ui) {
		var coltext = ui.target.text();
		var colvindex = ui.target.parent().children().index(ui.target);
		var colindex = $('table thead tr th:eq('+colvindex+')').data('column-index');
		switch(ui.cmd){
			case "filter":
				oTable.fnFilter(coltext,colindex,true);
				break;
			case "nofilter":
				oTable.fnFilterClear();
				break;
		}
	},
	beforeOpen: function(event, ui) {
		var menu = ui.menu,
			target = ui.target,
			extraData = ui.extraData;
		ui.menu.zIndex(0);
    }
  });
} );

