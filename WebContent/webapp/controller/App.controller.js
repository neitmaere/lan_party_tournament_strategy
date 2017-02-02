var appController = null;
sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/m/MessageBox" ], function(Controller, MessageBox) {
  "use strict";

  return Controller.extend("lan.party.tournament.controller.App", {

    roundCounter : 0,
    
    onInit : function() {
      appController = this;
    },
    
    onAfterRendering : function() {
      this._createSemiFinals();
      this._createThirdPlace();
      this._createFinal();
      this._createWinner();
    },
    
    
    _createSemiFinals : function(){
      var semiFinalRow = this.getView().byId("semiFinalRow");

      for (var i = 1; i <= 4; i++) {
        var semiFinalCell = new sap.ui.layout.BlockLayoutCell({
          title : "Halbfinalteam " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 4; x++) {
          semiFinalCell.addContent(new sap.m.StandardTile({
            title : "{StrategyTournament>/"+this.roundCounter+"/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{StrategyTournament>/"+this.roundCounter+"/result}",
            infoState : "{= ${StrategyTournament>/"+this.roundCounter+"/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{StrategyTournament>/"+this.roundCounter+"/gamerId}"
          }));
          this.roundCounter++;
        }
        semiFinalRow.addContent(semiFinalCell);
      }
    },
    
    _createThirdPlace : function(){
      var thirdPlaceRow = this.getView().byId("thirdPlaceRow");

      for (var i = 1; i <= 2; i++) {
        var thirdPlaceCell = new sap.ui.layout.BlockLayoutCell({
          title : "Spiel um Platz 3 Team " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 4; x++) {
          thirdPlaceCell.addContent(new sap.m.StandardTile({
            title : "{StrategyTournament>/"+this.roundCounter+"/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{StrategyTournament>/"+this.roundCounter+"/result}",
            infoState : "{= ${StrategyTournament>/"+this.roundCounter+"/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{StrategyTournament>/"+this.roundCounter+"/gamerId}"
          }));
          this.roundCounter++;
        }
        thirdPlaceRow.addContent(thirdPlaceCell);
      }
    },
    
    _createFinal : function(){
      var finalRow = this.getView().byId("finalRow");

      for (var i = 1; i <= 2; i++) {
        var finalCell = new sap.ui.layout.BlockLayoutCell({
          title : "Finalteam " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 4; x++) {
          finalCell.addContent(new sap.m.StandardTile({
            title : "{StrategyTournament>/"+this.roundCounter+"/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{StrategyTournament>/"+this.roundCounter+"/result}",
            infoState : "{= ${StrategyTournament>/"+this.roundCounter+"/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{StrategyTournament>/"+this.roundCounter+"/gamerId}"
          }));
          this.roundCounter++;
        }
        finalRow.addContent(finalCell);
      }
    },
    
    _createWinner : function(){
      var winnerRow = this.getView().byId("winnerRow");

      for (var i = 1; i <= 1; i++) {
        var winnerCell = new sap.ui.layout.BlockLayoutCell({
          title : "Siegerteam",
          titleAlignment : "Center"
        });

        for (var x = 0; x < 4; x++) {
          winnerCell.addContent(new sap.m.StandardTile({
            title : "{StrategyTournament>/"+this.roundCounter+"/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{StrategyTournament>/"+this.roundCounter+"/result}",
            infoState : "{= ${StrategyTournament>/"+this.roundCounter+"/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{StrategyTournament>/"+this.roundCounter+"/gamerId}"
          }));
          this.roundCounter++;
        }
        winnerRow.addContent(winnerCell);
      }
    },


    _refreshAllModels : function() {
      appController.getView().getModel("GamerPoints").loadData("../../nlpt_php/GamerPoints.php");
      appController.getView().getModel("Shooter").loadData("../../nlpt_php/Shooter.php");
      appController.getView().getModel("Sport").loadData("../../nlpt_php/Sport.php");
      appController.getView().getModel("Strategy").loadData("../../nlpt_php/Strategy.php");
      appController.getView().getModel("Racing1").loadData("../../nlpt_php/Racing.php?round=1");
      appController.getView().getModel("Racing2").loadData("../../nlpt_php/Racing.php?round=2");
      appController.getView().getModel("Racing3").loadData("../../nlpt_php/Racing.php?round=3");
      appController.getView().getModel("Racing4").loadData("../../nlpt_php/Racing.php?round=4");
      appController.getView().getModel("Survival1").loadData("../../nlpt_php/Survival.php?round=1");
      appController.getView().getModel("Survival2").loadData("../../nlpt_php/Survival.php?round=2");
      appController.getView().getModel("Survival3").loadData("../../nlpt_php/Survival.php?round=3");
    }

  });

});