import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CardTemplate from '../CardTemplate';

const styles = theme => ({
  paragraph: {
    paddingTop: 10,
    fontSize: '16px',
  },
  subheading: {
    paddingTop: 15,
    fontSize: '18px',
    fontWeight: 500,
  },
});

const Definition = ({ classes }) => (
  <CardTemplate headline="Hundkatzenschweinerein zusammengefasst">
    <Typography component="p" className={classes.paragraph}>
      Die Hybridisierung von Organismen, welche im Pflanzenbau bereits gängige Praxis ist, findet
      seit mehreren Jahren zunehmendes Interesse in der Zoologie und Haustierzucht. Auch außerhalb
      von Laboratorien mit millionenteuren Hochleistungsgeräten gelingt es immer häufiger Hund und
      Katze zusammenzubringen und kleinen Hybridwesen zu erzeugen, die sonst nur in Kinderbüchern zu
      bewundern sind. So hätte es noch vor wenigen Jahren wie Science Fiction geklungen, aus der DNA
      eines verstorbenen Hamsters und eines Kanarienvogels einen neuen kleinen Liebling für das
      Töchterlein zu schaffen, der einzigartig ist. Heute sind solche Sachen keine Seltenheit mehr.
      (Da Hundekatzenschweinereien momentan noch kurzlebig sind, sind sie als Geschenke für Kinder
      eher ungeeignet, wenn man sich die aus ihrem plötzlichen Ableben entstehenden Dramen vermeiden
      will. Anm. des Red.) Die Technik, die diesen Durchbruch ermöglichte, ist die populär als
      'Genschere' bekannte biochemische Methode Crisp/Cas.
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(Definition);
