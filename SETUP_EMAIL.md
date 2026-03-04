# 📧 Activer l'envoi d'email — Hôtel Esperanza
## Emails vers : alphato407@gmail.com

## ✅ SOLUTION IMMÉDIATE (déjà fonctionnelle)

Quand un client soumet le formulaire → **votre client email s'ouvre**
avec toutes les informations pré-remplies pour envoyer à alphato407@gmail.com.

> Cela fonctionne MAINTENANT sans aucune configuration.

---

## 🚀 SOLUTION AUTOMATIQUE — Formspree (gratuit, 5 minutes)

Avec Formspree, les emails arrivent **directement dans Gmail** sans que vous
ayez besoin de rien faire.

### Étapes :

**1. Créer un compte Formspree**
→ https://formspree.io (cliquer "Get Started Free")

**2. Créer un nouveau formulaire**
- Cliquer **"+ New Form"**
- Nom : `Réservation Hôtel Esperanza`
- Email : `alphato407@gmail.com`
- Cliquer **"Create Form"**

**3. Copier votre endpoint**
Vous verrez quelque chose comme :
```
https://formspree.io/f/xabcdefg
```

**4. Coller dans le code**
Ouvrir : `src/app/services/email.service.ts`

Ligne 16, remplacer :
```typescript
private readonly FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID';
```
par :
```typescript
private readonly FORMSPREE_ENDPOINT = 'https://formspree.io/f/xabcdefg'; // votre vrai ID
```

**5. Rebuild et déployer**
```bash
npm run build:prod
```

### ✅ C'est tout !
Chaque réservation enverra un email à alphato407@gmail.com avec :
- Nom, email, téléphone du client
- Dates d'arrivée / départ
- Type de bungalow choisi
- Nombre de personnes
- Prix estimé
- Message spécial

Le plan gratuit Formspree = **50 soumissions/mois** (suffisant pour un hôtel).
Plan payant = 5$/mois pour plus.

---

## 📌 Comparaison des solutions

| Solution | Configuration | Fiabilité | Coût |
|---|---|---|---|
| **mailto (actuel)** | Aucune ✅ | Dépend du client email | Gratuit |
| **Formspree** | 5 min ✅ | 100% automatique ✅ | Gratuit (50/mois) |
