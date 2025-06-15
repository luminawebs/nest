

        // Global constants and variables
        const EXCHANGE_RATE = 4179; // COP per USD (updated rate)
        let calculateQuote, updateLanguage, formatCurrency;
        
        // Global functions for HTML onclick handlers
        function openTab(evt, tabName) {
            try {
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                const tabContent = document.getElementById(tabName);
                if (!tabContent) throw new Error(`Tab content ${tabName} not found`);
                tabContent.classList.add('active');
                evt.currentTarget.classList.add('active');
                evt.currentTarget.setAttribute('aria-selected', 'true');
                document.querySelectorAll('.tab').forEach(tab => {
                    if (tab !== evt.currentTarget) tab.setAttribute('aria-selected', 'false');
                });
            } catch (error) {
                console.error('Error opening tab:', error);
            }
        }

        function validateAndCalculateQuote() {
            try {
                let isValid = true;
                const users = document.getElementById('users')?.value;
                const customization = document.getElementById('customization')?.value;
                const paymentMethod = document.getElementById('payment-method')?.value;

                const usersError = document.getElementById('users-error');
                if (!users) {
                    if (usersError) usersError.classList.remove('hidden');
                    isValid = false;
                } else {
                    if (usersError) usersError.classList.add('hidden');
                }

                const customizationError = document.getElementById('customization-error');
                if (!customization) {
                    if (customizationError) customizationError.classList.remove('hidden');
                    isValid = false;
                } else {
                    if (customizationError) customizationError.classList.add('hidden');
                }

                const paymentError = document.getElementById('payment-error');
                if (!paymentMethod) {
                    if (paymentError) paymentError.classList.remove('hidden');
                    isValid = false;
                } else {
                    if (paymentError) paymentError.classList.add('hidden');
                }

                if (isValid && typeof calculateQuote === 'function') {
                    calculateQuote();
                } else if (isValid) {
                    console.error('calculateQuote function not available');
                    alert('Error: Quote calculation function not available. Please refresh the page.');
                }
            } catch (error) {
                console.error('Error validating form:', error);
                alert('Error validating form. Please check your input and try again.');
            }
        }

        function resetForm() {
            try {
                const form = document.getElementById('quote-form');
                if (form) form.reset();
                const support = document.getElementById('support');
                if (support) support.checked = true;
                const initialPayment = document.getElementById('initial-payment');
                if (initialPayment) initialPayment.checked = true;
                const result = document.getElementById('result');
                if (result) result.classList.add('hidden');
                document.querySelectorAll('.error').forEach(error => error.classList.add('hidden'));
            } catch (error) {
                console.error('Error resetting form:', error);
            }
        }

        function downloadPDF() {
            try {
                const element = document.getElementById('result');
                if (!element) throw new Error('Result element not found');
                const currency = document.getElementById('currency')?.value || 'USD';
                const lang = document.getElementById('language')?.value || 'es';
                const opt = {
                    margin: 1,
                    filename: `cotizacion_lms_moodle_saas_${currency}_${lang}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
                if (typeof html2pdf === 'function') {
                    html2pdf().from(element).set(opt).save();
                } else {
                    console.error('html2pdf library not loaded');
                    alert('PDF download functionality is not available. Please check if the html2pdf library is loaded.');
                }
            } catch (error) {
                console.error('Error downloading PDF:', error);
                alert('Error generating PDF. Please try again.');
            }
        }

        function saveQuote() {
            try {
                const lang = document.getElementById('language')?.value || 'es';
                const message = lang === 'en' ? 'Quote saved locally. Retrieve it later or contact support to proceed.' : 'Cotización guardada localmente. Puede recuperarla más tarde o contactar soporte para proceder.';
                alert('Save Quote: ' + message);
            } catch (error) {
                console.error('Error saving quote:', error);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const translations = {
                en: {
                    title: "LMS Moodle SaaS Quote Calculator",
                    description: "Configure your online learning platform and get a personalized quote.",
                    basic: "Basic Configuration",
                    integrations: "Integrations",
                    payment: "Payment Method",
                    users: "Estimated number of users:",
                    usersHelp: "Select the user range for your platform.",
                    usersError: "Please select a user range.",
                    support: "Support included:",
                    supportLabel: "Basic technical support included",
                    customization: "Customization level:",
                    customizationError: "Please select a customization level.",
                    paymentMethod: "Payment method:",
                    paymentError: "Please select a payment method.",
                    initialPayment: "Initial payment:",
                    initialPaymentLabel: "30% initial payment (required)",
                    generateQuote: "Generate Quote",
                    reset: "Reset",
                    quoteTitle: "Your Personalized Quote",
                    breakdown: "Cost Breakdown",
                    features: "Included Features",
                    downloadPDF: "Download PDF",
                    saveQuote: "Save Quote",
                    videoconferencing: "Videoconferencing",
                    interactiveContent: "Interactive Content",
                    assessments: "Assessments",
                    analytics: "Reports and Analytics",
                    fileManagement: "File Management",
                    aiTools: "AI Tools",
                    authPayments: "Authentication and Payments"
                },
                es: {
                    title: "Cotizador LMS Moodle SaaS",
                    description: "Configure su plataforma de aprendizaje en línea y obtenga una cotización personalizada.",
                    basic: "Configuración Básica",
                    integrations: "Integraciones",
                    payment: "Método de Pago",
                    users: "Número estimado de usuarios:",
                    usersHelp: "Seleccione el rango de usuarios para su plataforma.",
                    usersError: "Por favor seleccione un rango de usuarios.",
                    support: "Soporte incluido:",
                    supportLabel: "Soporte técnico básico incluido",
                    customization: "Nivel de personalización:",
                    customizationError: "Por favor seleccione un nivel de personalización.",
                    paymentMethod: "Método de pago:",
                    paymentError: "Por favor seleccione un método de pago.",
                    initialPayment: "Pago inicial:",
                    initialPaymentLabel: "30% del costo inicial (obligatorio)",
                    generateQuote: "Generar Cotización",
                    reset: "Reiniciar",
                    quoteTitle: "Su Cotización Personalizada",
                    breakdown: "Desglose de Costos",
                    features: "Características Incluidas",
                    downloadPDF: "Descargar PDF",
                    saveQuote: "Guardar Cotización",
                    videoconferencing: "Videoconferencias",
                    interactiveContent: "Contenido Interactivo",
                    assessments: "Evaluaciones",
                    analytics: "Reportes y Analítica",
                    fileManagement: "Gestión de Archivos",
                    aiTools: "Herramientas de IA",
                    authPayments: "Autenticación y Pagos"
                }
            };

            updateLanguage = function() {
                try {
                    const lang = document.getElementById('language')?.value || 'es';
                    const title = document.getElementById('title');
                    if (title) title.textContent = translations[lang].title;

                    const description = document.getElementById('description');
                    if (description) description.textContent = translations[lang].description;

                    document.querySelectorAll('.tab').forEach(tab => {
                        if (tab.dataset.translate) tab.textContent = translations[lang][tab.dataset.translate];
                    });

                    const usersLabel = document.querySelector('label[for="users"]');
                    if (usersLabel) usersLabel.textContent = translations[lang].users;

                    const usersHelp = document.getElementById('users-help');
                    if (usersHelp) usersHelp.textContent = translations[lang].usersHelp;

                    const usersError = document.getElementById('users-error');
                    if (usersError) usersError.textContent = translations[lang].usersError;

                    const supportLabel = document.querySelector('label[for="support"]');
                    if (supportLabel) {
                        const span = supportLabel.querySelector('span');
                        if (span) {
                            supportLabel.childNodes[0].textContent = translations[lang].supportLabel + ' ';
                        }
                    }

                    const supportTitle = document.querySelector('label[for="support"]')?.parentElement.querySelector('label');
                    if (supportTitle) supportTitle.textContent = translations[lang].support;

                    const customizationLabel = document.querySelector('label[for="customization"]');
                    if (customizationLabel) customizationLabel.textContent = translations[lang].customization;

                    const customizationError = document.getElementById('customization-error');
                    if (customizationError) customizationError.textContent = translations[lang].customizationError;

                    const paymentMethodLabel = document.querySelector('label[for="payment-method"]');
                    if (paymentMethodLabel) paymentMethodLabel.textContent = translations[lang].paymentMethod;

                    const paymentError = document.getElementById('payment-error');
                    if (paymentError) paymentError.textContent = translations[lang].paymentError;

                    const initialPaymentLabel = document.querySelector('label[for="initial-payment"]');
                    if (initialPaymentLabel) initialPaymentLabel.textContent = translations[lang].initialPaymentLabel;

                    const initialPaymentTitle = document.querySelector('label[for="initial-payment"]')?.parentElement.querySelector('label');
                    if (initialPaymentTitle) initialPaymentTitle.textContent = translations[lang].initialPayment;

                    const generateQuoteButton = document.querySelector('button[type="submit"]');
                    if (generateQuoteButton) generateQuoteButton.textContent = translations[lang].generateQuote;

                    const resetButton = document.querySelector('button[onclick="resetForm()"]');
                    if (resetButton) resetButton.textContent = translations[lang].reset;

                    const quoteTitle = document.querySelector('#result h2');
                    if (quoteTitle) quoteTitle.textContent = translations[lang].quoteTitle;

                    const breakdownTitle = document.querySelector('.breakdown h3');
                    if (breakdownTitle) breakdownTitle.textContent = translations[lang].breakdown;

                    const featuresTitle = document.querySelector('.feature-list h3');
                    if (featuresTitle) featuresTitle.textContent = translations[lang].features;

                    const downloadPDFButton = document.querySelector('button[onclick="downloadPDF()"]');
                    if (downloadPDFButton) downloadPDFButton.textContent = translations[lang].downloadPDF;

                    const saveQuoteButton = document.querySelector('button[onclick="saveQuote()"]');
                    if (saveQuoteButton) saveQuoteButton.textContent = translations[lang].saveQuote;

                    document.querySelectorAll('[data-translate]').forEach(element => {
                        if (element.tagName === 'H3' && element.childNodes[2]) {
                            element.childNodes[2].textContent = translations[lang][element.dataset.translate];
                        }
                    });
                } catch (error) {
                    console.error('Error updating language:', error);
                }
            }

            formatCurrency = function(amount, currency) {
                try {
                    if (currency === 'COP') {
                        const copAmount = amount * EXCHANGE_RATE;
                        return new Intl.NumberFormat('es-CO', { 
                            style: 'currency', 
                            currency: 'COP',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(copAmount);
                    }
                    return new Intl.NumberFormat('en-US', { 
                        style: 'currency', 
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(amount);
                } catch (error) {
                    console.error('Error formatting currency:', error);
                    if (currency === 'COP') {
                        return `COP $${(amount * EXCHANGE_RATE).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
                    }
                    return `USD $${amount.toFixed(2)}`;
                }
            };


            calculateQuote = function() {
                try {
                    const users = parseInt(document.getElementById('users')?.value || 0);
                    const customization = document.getElementById('customization')?.value || 'basic';
                    const paymentMethod = document.getElementById('payment-method')?.value || 'monthly';
                    const currency = document.getElementById('currency')?.value || 'USD';

                    // Base costs (always in USD, will be converted in display)
                    let projectSize, baseCost, recurringCost;
                    if (users <= 100) {
                        projectSize = 'small';
                        baseCost = 1775;
                        recurringCost = 906;
                    } else if (users <= 1000) {
                        projectSize = 'medium';
                        baseCost = 2375;
                        recurringCost = 2406;
                    } else {
                        projectSize = 'large';
                        baseCost = 3375;
                        recurringCost = 5406;
                    }

                    // Customization
                    const customizationCost = parseInt(document.getElementById('customization')?.selectedOptions[0]?.dataset.cost || 0);
                    baseCost += customizationCost;

                    // Integrations
                    let integrationCosts = 0;
                    let recurringIntegrationCosts = 0;
                    let selectedIntegrations = [];

                    const integrations = [
                        { id: 'zoom', name: 'Zoom', cost: 900 },
                        { id: 'bbb', name: 'BigBlueButton', cost: 1200 },
                        { id: 'teams', name: 'Microsoft Teams', cost: 0 },
                        { id: 'h5p', name: 'H5P', cost: 0 },
                        { id: 'nearpod', name: 'Nearpod', cost: 10000 },
                        { id: 'kahoot', name: 'Kahoot', cost: 5000 },
                        { id: 'turnitin', name: 'Turnitin', cost: 10000 },
                        { id: 'seb', name: 'Safe Exam Browser', cost: 0 },
                        { id: 'proctorio', name: 'Proctorio', cost: 5000 },
                        { id: 'intelliboard', name: 'IntelliBoard', cost: 2000 },
                        { id: 'zoola', name: 'Zoola Analytics', cost: 3000 },
                        { id: 'google-drive', name: 'Google Drive', cost: 0 },
                        { id: 'dropbox', name: 'Dropbox', cost: 1200 },
                        { id: 'onedrive', name: 'OneDrive', cost: 0 },
                        { id: 'chatgpt', name: 'ChatGPT', cost: 2400, recurring: 200 },
                        { id: 'grammarly', name: 'Grammarly', cost: 1500 },
                        { id: 'pse', name: 'PSE (Colombia)', cost: 500 },
                        { id: 'stripe', name: 'Stripe', cost: 0 },
                        { id: 'paypal', name: 'PayPal', cost: 0 },
                        { id: 'google-saml', name: 'Google/SAML Login', cost: 0 }
                    ];

                    integrations.forEach(integration => {
                        const checkbox = document.getElementById(integration.id);
                        if (checkbox?.checked) {
                            integrationCosts += integration.cost;
                            if (integration.recurring) recurringIntegrationCosts += integration.recurring;
                            const costDisplay = currency === 'COP' ? 
                                `COP $${(integration.cost * EXCHANGE_RATE).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : 
                                `$${integration.cost}`;
                            const recurringDisplay = integration.recurring ? 
                                (currency === 'COP' ? 
                                    ` +COP $${(integration.recurring * EXCHANGE_RATE).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/mes` : 
                                    ` +$${integration.recurring}/mes`) : '';
                            selectedIntegrations.push(`${integration.name} (+${costDisplay}${recurringDisplay})`);
                        }
                    });

                    baseCost += integrationCosts;
                    recurringCost += recurringIntegrationCosts * 12;

                    // Final calculations
                    const firstYearCost = baseCost + recurringCost;
                    const margin = firstYearCost * 0.3;
                    let totalCost = firstYearCost + margin;
                    const initialPayment = baseCost * 0.3;

                    if (paymentMethod === 'annual') totalCost *= 0.9;

                    // Display results
                    const totalPrice = document.getElementById('total-price');
                    if (totalPrice) {
                        const displayAmount = totalCost / (paymentMethod === 'monthly' ? 12 : 1);
                        const period = paymentMethod === 'monthly' ? 'mes' : 'año';
                        totalPrice.textContent = `${formatCurrency(displayAmount, currency)}/${period}`;
                    }

                    // Display annual total price (always show full annual cost)
                    const annualTotalPrice = document.getElementById('annual-total-price');
                    if (annualTotalPrice) {
                        annualTotalPrice.textContent = formatCurrency(totalCost, currency);
                    }

                    // Display initial payment
                    const initialPaymentDisplay = document.getElementById('initial-payment-display');
                    if (initialPaymentDisplay) {
                        initialPaymentDisplay.textContent = formatCurrency(initialPayment, currency);
                    }

                    // Cost breakdown
                    const lang = document.getElementById('language')?.value || 'es';
                    const isSpanish = lang === 'es';
                    let breakdownHTML = `
                        <div class="flex justify-between py-2 border-b">
                            <span>${isSpanish ? 'Costo inicial (configuración):' : 'Initial cost (setup):'}</span>
                            <span>${formatCurrency(baseCost - integrationCosts, currency)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b">
                            <span>${isSpanish ? 'Integraciones adicionales:' : 'Additional integrations:'}</span>
                            <span>${formatCurrency(integrationCosts, currency)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b">
                            <span>${isSpanish ? 'Costo inicial total:' : 'Total initial cost:'}</span>
                            <span>${formatCurrency(baseCost, currency)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b">
                            <span>${isSpanish ? 'Costo recurrente anual:' : 'Annual recurring cost:'}</span>
                            <span>${formatCurrency(recurringCost, currency)}</span>
                        </div>
                        <div class="flex justify-between py-2 border-b">
                            <span>${isSpanish ? 'Margen (30%):' : 'Margin (30%):'}</span>
                            <span>${formatCurrency(margin, currency)}</span>
                        </div>
                    `;
                    if (paymentMethod === 'annual') {
                        breakdownHTML += `
                            <div class="flex justify-between py-2 border-b">
                                <span>${isSpanish ? 'Descuento por pago anual (10%):' : 'Annual payment discount (10%):'}</span>
                                <span>-${formatCurrency((firstYearCost + margin) * 0.1, currency)}</span>
                            </div>
                        `;
                    }
                    breakdownHTML += `
                        <div class="flex justify-between py-2 font-bold">
                            <span>${isSpanish ? 'Pago inicial requerido (30%):' : 'Required initial payment (30%):'}</span>
                            <span>${formatCurrency(initialPayment, currency)}</span>
                        </div>
                    `;

                    const costBreakdown = document.getElementById('cost-breakdown');
                    if (costBreakdown) costBreakdown.innerHTML = breakdownHTML;

                    // Features list
                    const includedText = isSpanish ? 'Incluido' : 'Included';
                    const customizationText = customization === 'basic' ? 
                        (isSpanish ? 'Básica' : 'Basic') : 
                        customization === 'moderate' ? 
                        (isSpanish ? 'Moderada' : 'Moderate') : 
                        (isSpanish ? 'Avanzada' : 'Advanced');
                    
                    let featuresHTML = `
                        <div class="flex justify-between py-2">
                            <span>${isSpanish ? 'Plataforma Moodle SaaS' : 'Moodle SaaS Platform'}</span>
                            <span>${includedText}</span>
                        </div>
                        <div class="flex justify-between py-2">
                            <span>${isSpanish ? 'Inscripción de usuarios (manual/CSV)' : 'User enrollment (manual/CSV)'}</span>
                            <span>${includedText}</span>
                        </div>
                        <div class="flex justify-between py-2">
                            <span>${isSpanish ? 'Soporte técnico básico' : 'Basic technical support'}</span>
                            <span>${includedText}</span>
                        </div>
                        <div class="flex justify-between py-2">
                            <span>${isSpanish ? 'Personalización:' : 'Customization:'} ${customizationText}</span>
                            <span>${customizationCost === 0 ? includedText : `+${formatCurrency(customizationCost, currency)}`}</span>
                        </div>
                    `;
                    selectedIntegrations.forEach(integration => {
                        try {
                            // Handle both USD and COP formats
                            let parts, costValue = 0, name = integration, costDisplay = includedText;
                            
                            if (integration.includes(' (+$')) {
                                parts = integration.split(' (+$');
                                name = parts[0];
                                const costPart = parts[1];
                                costValue = parseFloat(costPart.replace(/[^0-9.]/g, '')) || 0;
                                if (costValue > 0) {
                                    costDisplay = currency === 'COP' ? 
                                        `+COP $${(costValue * EXCHANGE_RATE).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
                                        `+$${costValue.toFixed(2)}`;
                                    if (costPart.includes('/mes')) costDisplay += '/mes';
                                }
                            } else if (integration.includes(' (+COP')) {
                                parts = integration.split(' (+COP');
                                name = parts[0];
                                const costPart = parts[1];
                                costValue = parseFloat(costPart.replace(/[^0-9.]/g, '')) || 0;
                                if (costValue > 0) {
                                    costDisplay = currency === 'USD' ? 
                                        `+$${(costValue / EXCHANGE_RATE).toFixed(2)}` :
                                        `+COP $${costValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
                                    if (costPart.includes('/mes')) costDisplay += '/mes';
                                }
                            }
                            
                            featuresHTML += `
                                <div class="flex justify-between py-2">
                                    <span>${name}</span>
                                    <span>${costDisplay}</span>
                                </div>
                            `;
                        } catch (err) {
                            console.warn('Error processing integration:', integration, err);
                        }
                    });

                    const featuresList = document.getElementById('features-list');
                    if (featuresList) featuresList.innerHTML = featuresHTML;

                    const result = document.getElementById('result');
                    if (result) result.classList.remove('hidden');

                    // Save quote data
                    const quoteData = {
                        users,
                        customization,
                        paymentMethod,
                        currency,
                        integrations: integrations.filter(integration => document.getElementById(integration.id)?.checked),
                        totalCost,
                        initialPayment,
                        timestamp: new Date().toISOString()
                    };
                    localStorage.setItem('lastQuote', JSON.stringify(quoteData));
                } catch (error) {
                    console.error('Error calculating quote:', error);
                }
            }


            // Event listeners
            const languageSelect = document.getElementById('language');
            if (languageSelect) {
                languageSelect.addEventListener('change', () => {
                    updateLanguage();
                    if (!document.getElementById('result')?.classList.contains('hidden')) calculateQuote();
                });
            }

            const currencySelect = document.getElementById('currency');
            if (currencySelect) {
                currencySelect.addEventListener('change', () => {
                    if (!document.getElementById('result')?.classList.contains('hidden')) calculateQuote();
                });
            }

            // Initial setup
            updateLanguage();
        });
