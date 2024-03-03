import './style.css'
import { pintarCarta } from './src/components/Carta/Carta'
import { header } from './src/components/Header/Header';

const h = header()
const carta = pintarCarta()
document.body.append(h,carta);