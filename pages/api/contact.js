const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Voornaam: ${body.firstname}\r\n
    Achternaam: ${body.lastname}\r\n
    Email: ${body.email}\r\n
    Telefoon: ${body.phone}\r\n
    Bedrijf: ${body.company}\r\n
    Functie: ${body.role}\r\n
    Bericht: ${body.message}
  `;

  await mail.send({
    to: "info@ocibv.nl",
    from: "contact@ocibv.nl",
    subject: "Nieuw bericht via het online contactformulier",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Ok" });
};
