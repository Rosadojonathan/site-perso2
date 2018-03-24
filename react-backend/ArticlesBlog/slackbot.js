var SLACK_WEBHOOK_URL = "LE_TOKEN_QUE_VOUS_AVEZ_COPIE_COLLE";


function sendSlackMessage(text, opt_channel){
  var slackMessage = {

    icon_url: "http://www.gstatic.com/images/icons/material/product/1x/adwords_64dp.png",
    username: "Campaign Alerts",
    as_user: true,
    channel: opt_channel,
     attachments: [{
    "color": "#008000",
      "text": text,
      "mrkdwn_in": ["text"],
    }]
  };

  var options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(slackMessage),
    muteHttpExceptions: true,
  };
      UrlFetchApp.fetch(SLACK_WEBHOOK_URL, options);
}


sendSlackMessage("Ceci est un message d'alerte")
