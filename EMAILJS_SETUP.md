# 📧 Configuration EmailJS — Hôtel Esperanza

Pour activer l'envoi automatique vers **alphato407@gmail.com**, suivez ces étapes :

## 1. Créer un compte EmailJS (gratuit)

👉 https://www.emailjs.com (plan gratuit = 200 emails/mois)

## 2. Connecter Gmail

1. Dashboard → **Email Services** → **Add New Service**
2. Choisir **Gmail**
3. Se connecter avec **alphato407@gmail.com**
4. Copier le **Service ID** (ex: `service_abc123`)

## 3. Créer le template d'email

1. Dashboard → **Email Templates** → **Create New Template**
2. **To Email** : `alphato407@gmail.com`
3. **Subject** : `🌴 Nouvelle réservation - {{from_name}}`
4. **Body** (copier-coller ce contenu) :

```
Nouvelle demande de réservation — Hôtel Esperanza

👤 Voyageur : {{from_name}}
📧 Email : {{from_email}}
📱 Téléphone : {{telephone}}

🏠 Hébergement : {{type_chambre}}
📅 Arrivée : {{date_arrivee}}
📅 Départ : {{date_depart}}
👥 Personnes : {{nb_personnes}}
💰 Estimation : {{prix_estime}}

💬 Message :
{{message}}

---
Répondre directement à : {{reply_to}}
```

5. Copier le **Template ID** (ex: `template_xyz789`)

## 4. Copier la Public Key

Dashboard → **Account** → **Public Key** (ex: `abcDEF123...`)

## 5. Mettre à jour le code

Ouvrir `src/app/services/email.service.ts` et remplacer :

```typescript
private readonly SERVICE_ID  = 'service_esperanza';    // ← votre Service ID
private readonly TEMPLATE_ID = 'template_reservation';  // ← votre Template ID
private readonly PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';        // ← votre Public Key
```

## 6. Tester

1. `npm start`
2. Cliquer "Réserver" sur le site
3. Remplir le formulaire
4. Vérifier la boîte alphato407@gmail.com

## 📌 Notes

- Le mode **démo** fonctionne sans configuration (affiche succès mais n'envoie pas)
- EmailJS gratuit = 200 emails/mois, suffisant pour un hôtel
- Tous les emails reçus auront le `reply_to` du client pour répondre directement
