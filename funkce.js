.obrazky:hover img {
    height: 250px; /* Ujistí se, že výška všech obrázků bude stejná */
}

.obrazek1:hover {
    width: 500px; /* Změní šířku prvku na 300px při hover */
    height: 250px; /* Ujistí se, že výška všech obrázků bude stejná */
}

.obrazek1:hover ~ .obrazek2,
.obrazek1:hover ~ .obrazek3,
.obrazek1:hover ~ .obrazek4 {
    height: 250px; /* Ujistí se, že výška všech obrázků bude stejná */
}

img {
    width: 200px;
    margin: 5px;
    height: 150px;
    transition: all 0.2s ease;
    object-fit: cover;
}