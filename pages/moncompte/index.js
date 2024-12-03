import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import { Tabs, Table, Collapse, Tag, Form, Input, Button, Row, Col, Modal, message, Descriptions } from 'antd';
import HeaderTop from '../../components/HeaderTop';
import HeaderBottom from '../../components/HeaderBottom';
import Breadcumb from '../../components/Breadcumb';
import apiClient from '../../service/apiClient';
import { useRouter } from 'next/router';
import { EyeOutlined,DownloadOutlined  } from '@ant-design/icons';

const { Panel } = Collapse;

// Breadcrumb menu
const breadcumbMenu = [
    { name: 'Accueil', route: '/' },
    { name: 'Mon Compte' },
];

// Status color mapping
const statutColors = {
    "en cours": "blue",
    "résolu": "green",
    "en appel": "orange",
    "archivé": "red",
};

const MonCompte = () => {
    // State management
    const [userInfo, setUserInfo] = useState({});
    const [affaires, setAffaires] = useState([]);
    const [document, setDocument] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAffaire, setSelectedAffaire] = useState(null);

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);


    const router = useRouter();

    // Fetch user information
    const getUserInfo = async (userId) => {
        try {
            const res = await apiClient.get(`/clients/${userId}`);
            setUserInfo(res.data);
            setAffaires(res.data.affaires || []);
            setDocument(res.data.affaires[0]?.documents || []);
        } catch (error) {
            console.error(error);
        }
    };



    // Verify user authentication
    const getUser = async () => {
        try {
            const res = await apiClient.get("/clients/verify");
            if (res.data.user.id) {
                await getUserInfo(res.data.user.id);
            }
        } catch (error) {
            router.push("/login");
            console.error(error);
        }
    };

    const changepassword = async (values) => {
        setLoading(true);
        try {
            const { currentPassword, newPassword, confirmPassword } = values;

            const response = await apiClient.put("/clients/reset-password", {
                oldPassword: currentPassword,
                newPassword,
                confirmPassword,
            });

            if (response.status === 200) {
                message.success(response.data.message);
                form.resetFields();
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                message.error(error.response.data.message);
            } else {
                message.error("Une erreur s'est produite. Veuillez réessayer.");
            }
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getUser();
    }, []);

    const handleReclamationSubmit = async (values) => {
        try {
            const response = await apiClient.post('/reclamation/createReclamation', values);
            if (response.status) {
                message.success('Réclamation envoyée avec succès');
                form.resetFields();
            }
        } catch (error) {
            console.error('Error details:', error);
            message.error("Une erreur s'est produite lors de l'envoi de la réclamation.");
        }
    };

    // Show modal with detailed affaire
    const showModal = (record) => {
        setSelectedAffaire(record);
        setModalVisible(true);
    };

    // Close modal
    const handleModalClose = () => {
        setModalVisible(false);
        setSelectedAffaire(null);
    };

    // Table columns
    const columns = [
        { title: 'Numéro Dossier', dataIndex: 'numeroDossier', key: 'numeroDossier' },
        { title: 'Nature Affaire', dataIndex: 'natureAffaire', key: 'natureAffaire' },
        {
            title: 'Statut',
            dataIndex: 'statut',
            key: 'statut',
            render: (statut) => <Tag color={statutColors[statut] || "default"}>{statut}</Tag>,
        },
        {
            title: '',
            key: 'action',
            render: (record) => (
                <EyeOutlined onClick={() => showModal(record)} style={{ cursor: 'pointer' }} />
            ),
        },
    ];

    const dataSource = affaires.map((affaire) => ({
        key: affaire._id,
        NomDuEntreprise: affaire.client, // Adjust according to your data structure
        dateProchaineAudience: affaire.dateProchaineAudience,
        documents: affaire.documents, // Use the documents field from the affaire
    }));

    const columnsDoc = [
        {
            title: 'Documents',
            dataIndex: 'documents',
            key: 'documents',
            render: (documents) => (
                <div>
                    {documents?.map((doc, index) => {
                        // Normalisation du chemin
                        const normalizedPath = doc.replace(/\\/g, '/');
                        const fileName = normalizedPath.split('/').pop();
    
                        return (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {/* Lien pour visualiser le document */}
                                <Button type="link" href={doc} target="_blank">
                                    {fileName}
                                </Button>
                                {/* Icône pour télécharger le document */}
                                <Button
                                    type="link"
                                    icon={<DownloadOutlined />}
                                    href={doc}
                                    target="_blank"
                                    download
                                />
                            </div>
                        );
                    })}
                </div>
            ),
        },
    ];
    

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
                                    <h3 style={{ paddingBottom: "20px" }}>Détails du Client</h3>
                                    <Row gutter={16}>
                                        <Col xs={24} xl={12}>
                                            <p><strong>Nom:</strong> {userInfo.nom}</p>
                                            <p><strong>Prénom:</strong> {userInfo.prenom}</p>
                                        </Col>
                                        <Col xs={24} xl={12}>
                                            <p><strong>Email:</strong> {userInfo.email}</p>
                                            <p><strong>Téléphone:</strong> {userInfo.telephone}</p>
                                        </Col>
                                    </Row>
                                    <h3 style={{ paddingBottom: "20px" }}>Changer le Mot de Passe</h3>
                                    <Form
                                        layout="vertical"
                                        form={form}
                                        onFinish={changepassword}
                                        autoComplete="off"
                                    >
                                        <Form.Item
                                            label="Mot de Passe Actuel"
                                            name="currentPassword"
                                            rules={[{ required: true, message: "Veuillez saisir votre mot de passe actuel" }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>

                                        <Form.Item
                                            label="Nouveau Mot de Passe"
                                            name="newPassword"
                                            rules={[
                                                { required: true, message: "Veuillez saisir un nouveau mot de passe" },
                                                { min: 6, message: "Le mot de passe doit comporter au moins 6 caractères" },
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>

                                        <Form.Item
                                            label="Confirmer le Nouveau Mot de Passe"
                                            name="confirmPassword"
                                            dependencies={['newPassword']}
                                            rules={[
                                                { required: true, message: "Veuillez confirmer votre nouveau mot de passe" },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('newPassword') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error("Les mots de passe ne correspondent pas"));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                loading={loading}
                                                style={{ backgroundColor: "#234434", borderColor: "#234434", color: "#fff" }}
                                            >
                                                Mettre à jour
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Tabs.TabPane>

                            {/* Tab: Mes Affaires */}
                            <Tabs.TabPane tab="Mes Affaires" key="2">
                                <Table
                                    columns={columns}
                                    dataSource={affaires.map((affaire, index) => ({ key: index, ...affaire }))}
                                    scroll={{ x: 'max-content' }}
                                    expandable={{
                                        expandedRowRender: (record) => (
                                            <Collapse accordion>
                                                <Panel header="Notes" key="1">
                                                    {record.notes?.length > 0 ? (
                                                        <Table
                                                            columns={[
                                                                {
                                                                    title: 'Date de Création',
                                                                    dataIndex: 'creationDate',
                                                                    key: 'creationDate',
                                                                    render: (date) => new Date(date).toLocaleDateString(),
                                                                },
                                                                { title: 'Titre', dataIndex: 'title', key: 'title' },
                                                                { title: 'Description', dataIndex: 'description', key: 'description' },
                                                            ]}
                                                            dataSource={record.notes.map((note, index) => ({ key: index, ...note }))}
                                                            pagination={false}
                                                            bordered

                                                        />
                                                    ) : (
                                                        <p>Pas de notes disponibles</p>
                                                    )}
                                                </Panel>
                                            </Collapse>
                                        ),
                                    }}
                                />
                                <Modal visible={modalVisible} onCancel={handleModalClose} footer={null}>
                                    {selectedAffaire && (
                                        <Descriptions bordered column={1} title="Details de l'Affaire">
                                            <Descriptions.Item label="Partie Adverse">
                                                {selectedAffaire.partieAdverse}
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Juridiction">
                                                {selectedAffaire.juridiction}
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Type Procédure">
                                                {selectedAffaire.typeProcedure}
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Avocat Conseil">
                                                {selectedAffaire.avocatConseil}
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Date Prochaine Audience">
                                                {selectedAffaire.dateProchaineAudience
                                                    ? new Date(selectedAffaire.dateProchaineAudience).toLocaleDateString()
                                                    : "Non définie"}
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Observations">
                                                {selectedAffaire.observations}
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Montant En Jeu">
                                                {selectedAffaire.montantEnJeu} TND
                                            </Descriptions.Item>
                                        </Descriptions>
                                    )}
                                </Modal>

                            </Tabs.TabPane>

                            {/* Other Tabs */}
                            <Tabs.TabPane tab="Document" key="5">
                                <Table
                                    columns={columnsDoc}
                                    dataSource={dataSource}
                                    scroll={{ x: 'max-content' }}
                                />
                            </Tabs.TabPane>

                            <Tabs.TabPane tab="Réclamation" key="4">
                                <h3>Formulaire de Réclamation</h3>
                                <Form
                                    layout="vertical"
                                    initialValues={{
                                        nom: userInfo.nom,
                                        prenom: userInfo.prenom,
                                        email: userInfo.email,
                                        telephone: userInfo.telephone || '',
                                    }}
                                    onFinish={handleReclamationSubmit}
                                >
                                    {/* <Form.Item
                                        label="Nom"
                                        name="nom"
                                        rules={[{ required: true, message: 'Veuillez saisir votre nom' }]}
                                    >
                                        <Input disabled />
                                    </Form.Item>
                                    <Form.Item
                                        label="Prenom"
                                        name="prenom"
                                        rules={[{ required: true, message: 'Veuillez saisir votre Prenom' }]}
                                    >
                                        <Input disabled />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, type: 'email', message: 'Veuillez saisir un email valide' }]}
                                    >
                                        <Input disabled />
                                    </Form.Item>
                                    <Form.Item
                                        label="Téléphone"
                                        name="telephone"
                                        rules={[{ required: true, message: 'Veuillez saisir votre numéro de téléphone' }]}
                                    >
                                        <Input disabled />
                                    </Form.Item> */}
                                    <Form.Item
                                        label="Message"
                                        name="message"
                                        rules={[{ required: true, message: 'Veuillez saisir un message' }]}
                                    >
                                        <Input.TextArea rows={4} />
                                    </Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{ backgroundColor: '#234434', borderColor: '#234434', color: '#fff' }}
                                    >
                                        Envoyer
                                    </Button>
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
