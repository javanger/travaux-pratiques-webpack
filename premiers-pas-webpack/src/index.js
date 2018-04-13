import { insererTitre } from './serviceTitre';
import {insertBody, insererBody} from './serviceBody';

document.addEventListener('DOMContentLoaded', function(event) {
    insererTitre();
    insererBody();
});