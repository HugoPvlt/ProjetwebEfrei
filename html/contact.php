<?php include '../php/header.php'; ?>

<main class="contact-page">
    <h1>Contact &amp; Admissions</h1>
    <p class="page-subtitle">Une question ? Nos équipes sont disponibles pour vous accompagner dans vos démarches.</p>

    <div class="contact-grid">

        <div class="contact-info-card">
            <div>
                <h2>Efrei Paris</h2>
                <p class="contact-school-desc">
                    Grande École d'Ingénieurs du Numérique
                </p>
            </div>
            <div class="contact-divider"></div>
            <div class="contact-info-item">
                <span class="label">Adresse</span>
                <span class="value">30-32 Avenue de la République<br>94800 Villejuif, France</span>
            </div>
            <div class="contact-info-item">
                <span class="label">Téléphone</span>
                <span class="value">+33 1 88 28 90 01</span>
            </div>
            <div class="contact-info-item">
                <span class="label">Email admissions</span>
                <span class="value">admissions@efrei.fr</span>
            </div>
            <div class="contact-divider"></div>
            <div class="contact-info-item">
                <span class="label">Horaires d'accueil</span>
                <span class="value">Lundi – Vendredi : 9h00 – 17h30</span>
            </div>
        </div>

        <div class="contact-form-card">
            <h2>Envoyer un message</h2>

            <div class="form-row">
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input type="text" id="prenom" placeholder="Jean">
                </div>
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" placeholder="Dupont">
                </div>
            </div>

            <div class="form-group">
                <label for="email">Adresse e-mail</label>
                <input type="email" id="email" placeholder="jean.dupont@email.com">
            </div>

            <div class="form-group">
                <label for="sujet">Sujet</label>
                <select id="sujet">
                    <option value="">-- Sélectionnez un sujet --</option>
                    <option value="admissions">Admissions &amp; Candidatures</option>
                    <option value="formation">Informations sur les formations</option>
                    <option value="stages">Stages &amp; Alternance</option>
                    <option value="international">Programmes internationaux</option>
                    <option value="autre">Autre</option>
                </select>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Décrivez votre demande…"></textarea>
            </div>

            <button class="btn-submit" onclick="envoyerMessage()">Envoyer le message</button>
        </div>

    </div>
</main>

<script src="../js/main.js" defer></script>
<?php include '../php/footer.php'; ?>