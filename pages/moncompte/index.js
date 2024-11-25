import React, { Fragment } from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import { Tabs, Table, Collapse, Tag, Form, Input, Button, DatePicker, Calendar, Select } from 'antd';
import HeaderTop from '../../components/HeaderTop';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcumb from '../../components/Breadcumb';

const { Panel } = Collapse;
const { Option } = Select;

const breadcumbMenu = [
    { name: 'Accueil', route: '/' },
    { name: 'Mon Compte' },
];

// Mock data
const clientDetails = {
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@example.com',
    telephone: '123456789',
};

const affaireData = [
    {
        key: '1',
        numeroDossier: '12345',
        partieAdverse: 'John Doe',
        natureAffaire: 'Litigation',
        juridiction: 'Court A',
        typeProcedure: 'Judgment',
        statut: 'en cours',
        dateProchaineAudience: '2024-12-01',
        avocatConseil: 'Me. Smith',
        observations: 'Pending further review',
        montantEnJeu: 15000,
    },
    {
        key: '2',
        numeroDossier: '67890',
        partieAdverse: 'Jane Roe',
        natureAffaire: 'Contract Dispute',
        juridiction: 'Court B',
        typeProcedure: 'Referé',
        statut: 'résolu',
        dateProchaineAudience: null,
        avocatConseil: 'Me. Johnson',
        observations: 'Case closed',
        montantEnJeu: 25000,
    },
];

// Columns for affairs table
const columns = [
    { title: 'Numéro Dossier', dataIndex: 'numeroDossier', key: 'numeroDossier' },
    { title: 'Partie Adverse', dataIndex: 'partieAdverse', key: 'partieAdverse' },
    { title: 'Nature Affaire', dataIndex: 'natureAffaire', key: 'natureAffaire' },
    { title: 'Juridiction', dataIndex: 'juridiction', key: 'juridiction' },
    { title: 'Type Procédure', dataIndex: 'typeProcedure', key: 'typeProcedure' },
    {
        title: 'Statut',
        dataIndex: 'statut',
        key: 'statut',
        render: (statut) => {
            const color =
                statut === 'en cours'
                    ? 'blue'
                    : statut === 'résolu'
                    ? 'green'
                    : statut === 'en appel'
                    ? 'orange'
                    : 'red';
            return <Tag color={color}>{statut}</Tag>;
        },
    },
];

const MonCompte = () => {
    const onFinishReclamation = (values) => {
        console.log('Réclamation submitted:', values);
    };

    return (
        <Fragment>
            <Head>
                <title>Mon Compte</title>
            </Head>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Mon Compte"
                breadcumbMenu={breadcumbMenu}
                background="/images/breadcumb/1.jpg"
            />
            <Grid className="contactusPageArea">
                <Grid container spacing={2} className="container">
                    <Grid item md={12} xs={12}>
                        <Tabs defaultActiveKey="1">
                            {/* Tab: Mon Compte */}
                            <Tabs.TabPane tab="Mon Compte" key="1">
                                <div style={{ padding: '20px' }}>
                                    <h3>Détails du Client</h3>
                                    <p><strong>Nom:</strong> {clientDetails.nom}</p>
                                    <p><strong>Prénom:</strong> {clientDetails.prenom}</p>
                                    <p><strong>Email:</strong> {clientDetails.email}</p>
                                    <p><strong>Téléphone:</strong> {clientDetails.telephone}</p>
                                    <h4>Changer le Mot de Passe</h4>
                                    <Form layout="vertical">
                                        <Form.Item label="Mot de Passe Actuel" name="currentPassword">
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item label="Nouveau Mot de Passe" name="newPassword">
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item label="Confirmer le Nouveau Mot de Passe" name="confirmPassword">
                                            <Input.Password />
                                        </Form.Item>
                                        <Button type="primary" htmlType="submit"  style={{ backgroundColor: '#234434', borderColor: '#234434', color: '#fff' }}>
                                        Mettre à jour</Button>
                                    </Form>
                                </div>
                            </Tabs.TabPane>

                            {/* Tab: Mes Affaires */}
                            <Tabs.TabPane tab="Mes Affaires" key="2">
                                <Table
                                    columns={columns}
                                    dataSource={affaireData}
                                    scroll={{
                                        x: 'max-content',
                                      }}
                                    expandable={{
                                        expandedRowRender: (record) => (
                                            <Collapse accordion>
                                                <Panel header="Détails Complémentaires" key="1">
                                                    <p><strong>Avocat Conseil:</strong> {record.avocatConseil}</p>
                                                    <p><strong>Date Prochaine Audience:</strong> {record.dateProchaineAudience || 'Non définie'}</p>
                                                    <p><strong>Observations:</strong> {record.observations}</p>
                                                    <p><strong>Montant En Jeu:</strong> {record.montantEnJeu} TND</p>
                                                </Panel>
                                            </Collapse>
                                        ),
                                    }}
                                />
                            </Tabs.TabPane>

                            {/* Tab: Demande RDV */}
                            <Tabs.TabPane tab="Demande RDV" key="3">
                                <h3>Calendrier des Disponibilités</h3>
                                <Calendar fullscreen={false} />
                            </Tabs.TabPane>

                            {/* Tab: Réclamation */}
                            <Tabs.TabPane tab="Réclamation" key="4">
                                <h3>Formulaire de Réclamation</h3>
                                <Form layout="vertical" onFinish={onFinishReclamation}>
                                    <Form.Item label="Nom" name="nom" rules={[{ required: true, message: 'Veuillez saisir votre nom' }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Veuillez saisir un email valide' }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Téléphone" name="telephone" rules={[{ required: true, message: 'Veuillez saisir votre numéro de téléphone' }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Veuillez saisir un message' }]}>
                                        <Input.TextArea rows={4} />
                                    </Form.Item>
                                    <Button type="primary" htmlType="submit"  style={{ backgroundColor: '#234434', borderColor: '#234434', color: '#fff' }}>
                                    Envoyer</Button>
                                </Form>
                            </Tabs.TabPane>
                        </Tabs>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default MonCompte;
