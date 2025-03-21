// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(640, 366, "background");
		background.scaleY = 1.2;

		// playerholderSprite
		const playerholderSprite = this.add.sprite(232, 540, "playerstand", 0);
		playerholderSprite.scaleX = 1.444944303492753;
		playerholderSprite.scaleY = 1.444944303492753;
		playerholderSprite.play("playerstandplayerstand");

		// gameOverTextDisplay
		const gameOverTextDisplay = this.add.image(640, 89, "gameOver");

		// leaderboard_container
		const leaderboard_container = this.add.container(1067, 118);

		// leaderboardbackgroud
		const leaderboardbackgroud = this.add.rectangle(0, 317, 128, 128);
		leaderboardbackgroud.scaleX = 2.449803091586994;
		leaderboardbackgroud.scaleY = 4.104804057027134;
		leaderboardbackgroud.isFilled = true;
		leaderboardbackgroud.fillColor = 0;
		leaderboardbackgroud.fillAlpha = 0.75;
		leaderboard_container.add(leaderboardbackgroud);

		// leaderboardText
		const leaderboardText = this.add.text(-131, 3, "", {});
		leaderboardText.text = "Leaderboard\n";
		leaderboardText.setStyle({ "color": "#000000ff", "fontFamily": "ApexMk2-BoldExtended", "fontSize": "36px" });
		leaderboard_container.add(leaderboardText);

		// LeaderboardTableName
		const leaderboardTableName = this.add.text(-140, 74, "", {});
		leaderboardTableName.text = "NAME";
		leaderboardTableName.setStyle({ "fontFamily": "ApexMk2-BoldExtended", "fontSize": "24px" });
		leaderboard_container.add(leaderboardTableName);

		// LeaderboardTablescorename
		const leaderboardTablescorename = this.add.text(56, 74, "", {});
		leaderboardTablescorename.text = "SCORE\n";
		leaderboardTablescorename.setStyle({ "fontFamily": "ApexMk2-BoldExtended", "fontSize": "24px" });
		leaderboard_container.add(leaderboardTablescorename);

		// finalscore_container
		const finalscore_container = this.add.container(550, 185);

		// scorevalue
		const scorevalue = this.add.text(23, 54, "", {});
		scorevalue.text = "0000";
		scorevalue.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "ApexMk2-BoldExtended", "fontSize": "50px" });
		finalscore_container.add(scorevalue);

		// Score
		const score = this.add.text(0, 0, "", {});
		score.text = "SCORE\n";
		score.setStyle({ "color": "#000000ff", "fontFamily": "ApexMk2-BoldExtended", "fontSize": "55px" });
		finalscore_container.add(score);

		// restartbutton
		const restartbutton = this.add.image(640, 574, "Restart_1");

		// home_button
		const home_button = this.add.image(640, 642, "Home");

		// log_container
		const log_container = this.add.container(640, 426);

		// 1
		const _1 = this.add.rectangle(0, -116, 128, 128);
		_1.scaleX = 4.324049219274585;
		_1.scaleY = 2.9380197156913215;
		_1.isFilled = true;
		_1.fillColor = 0;
		log_container.add(_1);

		// image
		const image = this.add.image(0, -14, "InputField");
		image.visible = false;
		log_container.add(image);

		// input_field_bsc_adress
		const input_field_bsc_adress = this.add.text(0, 0, "", {});
		input_field_bsc_adress.setInteractive(new Phaser.Geom.Rectangle(0, 0, 404, 46), Phaser.Geom.Rectangle.Contains);
		input_field_bsc_adress.scaleX = 0;
		input_field_bsc_adress.scaleY = 0;
		input_field_bsc_adress.setStyle({ "align": "center", "fixedWidth": 407, "fixedHeight": 46, "fontFamily": "Oswald-SemiBold", "fontSize": "18px", "maxLines": 5 });
		log_container.add(input_field_bsc_adress);

		// input_field_nick_name
		const input_field_nick_name = this.add.text(0, 0, "", {});
		input_field_nick_name.setInteractive(new Phaser.Geom.Rectangle(0, 0, 280, 32), Phaser.Geom.Rectangle.Contains);
		input_field_nick_name.scaleX = 0;
		input_field_nick_name.scaleY = 0;
		input_field_nick_name.setStyle({ "align": "center", "fixedWidth": 280, "fixedHeight": 32, "fontFamily": "Oswald-SemiBold", "fontSize": "25px" });
		log_container.add(input_field_nick_name);

		// image_1
		const image_1 = this.add.image(0, -156, "InputField");
		image_1.visible = false;
		log_container.add(image_1);

		// submit
		const submit = this.add.image(-1, 4, "Submitbutton");
		log_container.add(submit);

		// closebutton_log_container
		const closebutton_log_container = this.add.image(236, -277, "closebutton");
		closebutton_log_container.scaleX = 0.3;
		closebutton_log_container.scaleY = 0.3;
		log_container.add(closebutton_log_container);

		// log_container_msg
		const log_container_msg = this.add.text(-169, -268, "", {});
		log_container_msg.setStyle({ "fontFamily": "ApexMk2-BoldExtended" });
		log_container.add(log_container_msg);

		this.gameOverTextDisplay = gameOverTextDisplay;
		this.leaderboardTableName = leaderboardTableName;
		this.leaderboardTablescorename = leaderboardTablescorename;
		this.leaderboard_container = leaderboard_container;
		this.scorevalue = scorevalue;
		this.finalscore_container = finalscore_container;
		this.restartbutton = restartbutton;
		this.home_button = home_button;
		this.input_field_bsc_adress = input_field_bsc_adress;
		this.input_field_nick_name = input_field_nick_name;
		this.submit = submit;
		this.closebutton_log_container = closebutton_log_container;
		this.log_container_msg = log_container_msg;
		this.log_container = log_container;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	gameOverTextDisplay;
	/** @type {Phaser.GameObjects.Text} */
	leaderboardTableName;
	/** @type {Phaser.GameObjects.Text} */
	leaderboardTablescorename;
	/** @type {Phaser.GameObjects.Container} */
	leaderboard_container;
	/** @type {Phaser.GameObjects.Text} */
	scorevalue;
	/** @type {Phaser.GameObjects.Container} */
	finalscore_container;
	/** @type {Phaser.GameObjects.Image} */
	restartbutton;
	/** @type {Phaser.GameObjects.Image} */
	home_button;
	/** @type {Phaser.GameObjects.Text} */
	input_field_bsc_adress;
	/** @type {Phaser.GameObjects.Text} */
	input_field_nick_name;
	/** @type {Phaser.GameObjects.Image} */
	submit;
	/** @type {Phaser.GameObjects.Image} */
	closebutton_log_container;
	/** @type {Phaser.GameObjects.Text} */
	log_container_msg;
	/** @type {Phaser.GameObjects.Container} */
	log_container;

	/* START-USER-CODE */

	// Method to receive data from previous scene
	init(data) {
		this.finalScore = data.score || 0;
		this.highScore = data.highScore || 0;
		this.isNewHighScore = false;

        // Add mobile detection
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // Create container for HTML elements
        this.htmlInputs = [];

        // Context menu for paste functionality
        this.contextMenu = null;

        // More precise screen size detection for input field scaling
        const screenWidth = window.innerWidth;
        this.isSmallScreen = screenWidth < 768; // Tablets and smaller
        this.isTinyScreen = screenWidth < 480; // Small phones

        // Dynamically calculate scaling factor based on screen size
        if (this.isTinyScreen) {
            this.inputScaleFactor = 0.55; // Very small screens
        } else if (this.isSmallScreen || this.isMobile) {
            this.inputScaleFactor = 0.7; // Tablets and mobile devices
        } else {
            this.inputScaleFactor = 1.0; // Desktop and large screens
        }
	}

	create() {
		this.editorCreate();

		// Remove initialization for auto-hide tracking
		this.formManuallyClosed = false;
		// Remove the logContainerTimer initialization

		// Load sound for button click
		this.clickSound = this.sound.add('click');
		this.popupsound = this.sound.add('popup');
		this.submitSound = this.sound.add('submitsfx');

		// Set initial state for game over text animation
		this.gameOverTextDisplay.setScale(0.5);
		this.gameOverTextDisplay.alpha = 0;

		// Set initial state for score container animation
		this.finalscore_container.setScale(0.5);
		this.finalscore_container.alpha = 0;

		// Set initial state for leaderboard container animation - Make it centered but large
		this.leaderboard_container.setScale(2.5); // Start with a larger scale
		this.leaderboard_container.alpha = 0;
		// Keep the leaderboard at its natural X position but centered for the zoom effect
		this.leaderboard_container.x = 640; // Center of screen horizontally
		this.leaderboard_container.y = 366; // Center of screen vertically

		// Set initial state for restart button
		this.restartbutton.setScale(0.9);
		this.restartbutton.alpha = 0;

		// Set initial state for home button
		this.home_button.setScale(0.9);
		this.home_button.alpha = 0;

		// Set initial state for log container
		this.log_container.setScale(0.8);
		this.log_container.alpha = 0;
		this.log_container_msg.alpha = 0; // Hide the message initially

        // Find and hide the input field background images in the log container
        this.log_container.list.forEach(child => {
            if (child.type === 'Image' && child.texture.key === 'InputField') {
                child.alpha = 0.2; // Make them barely visible for positioning reference
            }
        });

		// Update score value with final score from Level scene
		this.scorevalue.setText(this.finalScore.toString().padStart(4, '0'));

		// Initialize input fields
		this.initializeInputFields();

		// First, animate game over text
		this.tweens.add({
			targets: this.gameOverTextDisplay,
			scaleX: 1,
			scaleY: 1,
			alpha: 1,
			duration: 1000,
			ease: 'Bounce.Out',
			onStart: () => {
				// Play popup sound when game over text appears
				this.popupsound.play();
			},
			onComplete: () => {
				// Then, animate score container
				this.tweens.add({
					targets: this.finalscore_container,
					scaleX: 1,
					scaleY: 1,
					alpha: 1,
					duration: 800,
					ease: 'Back.Out',
					onStart: () => {
						// Play popup sound when score container appears
						this.popupsound.play();
					},
					onComplete: () => {
						// Show buttons right after score display
						this.showButtons();

						// Then, animate log container
						this.showLogContainer();
					}
				});
			}
		});

		// Button interactions for restart and home buttons
		this.setupButtonInteractions();

        // Add multiple event listeners for different scenarios
        window.addEventListener('resize', () => this.updateHtmlInputPositions());
        window.addEventListener('orientationchange', () => {
            // Short delay to allow orientation change to complete
            setTimeout(() => this.updateHtmlInputPositions(), 100);
        });

        // Update positions periodically during the first few seconds
        // This helps catch any delayed layout changes
        const updateInterval = setInterval(() => {
            this.updateHtmlInputPositions();
        }, 100);

        // Stop the interval after 2 seconds
        setTimeout(() => clearInterval(updateInterval), 2000);
	}

	// Initialize input fields with typing functionality
	initializeInputFields() {
        // Create HTML inputs for all platforms
        this.createHtmlInputs();

		// Set up submit button
		this.submit.setInteractive();
		this.submit.on('pointerdown', () => this.handleSubmit());

		// Add hover effects for submit button
		this.submit.on('pointerover', () => {
			this.tweens.add({
				targets: this.submit,
				scaleX: 1.1,
				scaleY: 1.1,
				duration: 100
			});
		});

		this.submit.on('pointerout', () => {
			this.tweens.add({
				targets: this.submit,
				scaleX: 1,
				scaleY: 1,
				duration: 100
			});
		});

		// Set up close button
		this.closebutton_log_container.setInteractive();
		this.closebutton_log_container.on('pointerdown', () => this.hideLogContainer());
	}

    // Create HTML input fields for all platforms
    createHtmlInputs() {
        // Remove any existing HTML elements
        this.cleanupHtmlInputs();

        // Get the game canvas for positioning
        const canvas = this.sys.game.canvas;
        const canvasBounds = canvas.getBoundingClientRect();

        // Calculate scale factors
        const scaleX = canvasBounds.width / this.sys.game.config.width;
        const scaleY = canvasBounds.height / this.sys.game.config.height;

        // Create nickname input
        const nicknameInput = document.createElement('input');
        nicknameInput.type = 'text';
        nicknameInput.maxLength = 16;
        nicknameInput.placeholder = 'Enter Nickname';
        this.styleHtmlInput(nicknameInput, true); // true for nickname field

        // Create BSC address input
        const bscInput = document.createElement('input');
        bscInput.type = 'text';
        bscInput.maxLength = 42;
        bscInput.placeholder = 'Enter BSC Address (0x...)';
        this.styleHtmlInput(bscInput, false); // false for BSC field

        // Add to document first so we can measure them if needed
        document.body.appendChild(nicknameInput);
        document.body.appendChild(bscInput);
        this.htmlInputs.push(nicknameInput);
        this.htmlInputs.push(bscInput);

        // Position the inputs
        this.positionHtmlInput(nicknameInput, true);
        this.positionHtmlInput(bscInput, false);

        // Enhanced paste handling
        nicknameInput.addEventListener('paste', (e) => {
            // Short delay to allow paste to complete
            setTimeout(() => {
                this.showStatusMessage("Text pasted!");
            }, 10);
        });

        bscInput.addEventListener('paste', (e) => {
            // Short delay to allow paste to complete
            setTimeout(() => {
                this.showStatusMessage("Text pasted!");
            }, 10);
        });

        // Focus management
        nicknameInput.addEventListener('focus', () => {
            this.activeField = "nickname";
            this.showStatusMessage("Nick Name Field");
        });

        bscInput.addEventListener('focus', () => {
            this.activeField = "bscAddress";
            this.showStatusMessage("BSC Address Field");
        });

        // Store references to access later
        this.nicknameInput = nicknameInput;
        this.bscInput = bscInput;

        // Update the position when the scene is resized
        this.scale.on('resize', this.updateHtmlInputPositions, this);

        // Update positions when the log container appears
        this.events.once('log-container-shown', this.updateHtmlInputPositions, this);

        // Monitor orientation changes specifically for mobile
        if (this.isMobile) {
            window.addEventListener('orientationchange', () => {
                // Short delay to allow browser to complete orientation change
                setTimeout(() => this.updateHtmlInputPositions(), 100);
            });
        }
    }

    // Style the HTML inputs with minimal settings
    styleHtmlInput(input, isNickname) {
        input.style.position = 'absolute';
        input.style.fontFamily = 'Oswald-SemiBold, Arial, sans-serif';

        // Set initial display to none - will be shown when container is visible
        input.style.display = 'none';

        // Increase z-index to ensure fields are visible above all game elements
        input.style.zIndex = '10000';

        // Base styling
        input.style.color = '#FFFFFF';
        input.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        input.style.border = '2px solid rgba(255, 255, 255, 0.6)';
        input.style.borderRadius = '4px';
        input.style.boxSizing = 'border-box';
        input.style.textAlign = 'center';
        input.style.outline = 'none';

        // Enhanced placeholder styling
        input.style.caretColor = '#ffffff';

        // Ensure visibility with opacity and visibility properties
        input.style.opacity = '1';
        input.style.visibility = 'visible';
        input.style.pointerEvents = 'auto';

        // Focus styling
        input.addEventListener('focus', () => {
            input.style.border = '2px solid rgba(136, 255, 136, 0.8)';
        });

        // Blur styling
        input.addEventListener('blur', () => {
            input.style.border = '2px solid rgba(255, 255, 255, 0.6)';
        });
    }

    // Position HTML inputs
    positionHtmlInput(htmlInput, isNickname) {
        // Get current canvas bounds and scale
        const canvas = this.sys.game.canvas;
        const canvasBounds = canvas.getBoundingClientRect();
        const scaleX = canvasBounds.width / this.sys.game.config.width;
        const scaleY = canvasBounds.height / this.sys.game.config.height;

        // Get log container position
        const containerWorldPos = this.log_container.getWorldTransformMatrix();
        const containerX = containerWorldPos.tx * scaleX + canvasBounds.left;
        const containerY = containerWorldPos.ty * scaleY + canvasBounds.top;

        // Determine position based on whether this is the nickname or BSC address field
        // Move both fields higher up by adjusting these Y offsets
        const yOffset = isNickname ? -180 : -120; // Changed from -120/-80 to -160/-100
        const yPos = containerY + (yOffset * scaleY * this.log_container.scale);

        // Set width based on container and field type
        const width = isNickname ? 280 : 340; 

        // Set position and dimensions
        htmlInput.style.width = (width * scaleX * this.log_container.scale) + 'px';
        htmlInput.style.height = (40 * scaleY * this.log_container.scale) + 'px';
        htmlInput.style.left = (containerX - (width/2 * scaleX * this.log_container.scale)) + 'px';
        htmlInput.style.top = yPos + 'px';

        // Font size based on scale
        const fontSize = isNickname ? 20 : 18;
        htmlInput.style.fontSize = (fontSize * scaleY * this.log_container.scale) + 'px';
    }

    // Add this custom function to ensure submit button is properly positioned
    positionSubmitButton() {
        if (!this.submit) return;
    }

    // Update HTML input positions
    updateHtmlInputPositions() {
        if (!this.htmlInputs.length) return;

        // Get current canvas and game dimensions
        const canvas = this.sys.game.canvas;
        const canvasBounds = canvas.getBoundingClientRect();
        const gameWidth = this.sys.game.config.width;
        const gameHeight = this.sys.game.config.height;

        // Calculate scale factors based on current canvas size
        const scaleX = canvasBounds.width / gameWidth;
        const scaleY = canvasBounds.height / gameHeight;

        // Only show inputs when log container is visible
        const containerVisible = this.log_container && this.log_container.alpha > 0.8;

        if (this.nicknameInput && this.bscInput && containerVisible) {
            // Get container's world position
            const containerMatrix = this.log_container.getWorldTransformMatrix();
            const containerX = containerMatrix.tx * scaleX + canvasBounds.left;
            const containerY = containerMatrix.ty * scaleY + canvasBounds.top;

            // Calculate container's scale including scene scale
            const containerScale = this.log_container.scale * Math.min(scaleX, scaleY);

            // Determine if we're in portrait mode
            const isPortrait = window.innerHeight > window.innerWidth;

            // Adjust vertical positioning based on orientation
            const nickNameYOffset = isPortrait ? -140 : -180;
            const bscYOffset = isPortrait ? -80 : -120;

            // Calculate field dimensions
            const nickNameWidth = 280 * containerScale;
            const bscWidth = 340 * containerScale;
            const fieldHeight = 40 * containerScale;

            // Position nickname input
            this.nicknameInput.style.display = 'block';
            this.nicknameInput.style.width = `${nickNameWidth}px`;
            this.nicknameInput.style.height = `${fieldHeight}px`;
            this.nicknameInput.style.left = `${containerX - (nickNameWidth/2)}px`;
            this.nicknameInput.style.top = `${containerY + (nickNameYOffset * containerScale)}px`;
            this.nicknameInput.style.fontSize = `${20 * containerScale}px`;

            // Position BSC input
            this.bscInput.style.display = 'block';
            this.bscInput.style.width = `${bscWidth}px`;
            this.bscInput.style.height = `${fieldHeight}px`;
            this.bscInput.style.left = `${containerX - (bscWidth/2)}px`;
            this.bscInput.style.top = `${containerY + (bscYOffset * containerScale)}px`;
            this.bscInput.style.fontSize = `${18 * containerScale}px`;

            // Ensure inputs are visible and properly styled
            [this.nicknameInput, this.bscInput].forEach(input => {
                input.style.opacity = '1';
                input.style.visibility = 'visible';
                input.style.position = 'absolute';
                input.style.zIndex = '10000';
                input.style.transform = 'translateZ(0)'; // Force GPU acceleration
            });
        } else {
            // Hide inputs when container is not visible
            if (this.nicknameInput) this.nicknameInput.style.display = 'none';
            if (this.bscInput) this.bscInput.style.display = 'none';
        }
    }

    // Clean up HTML inputs and event listeners
    cleanupHtmlInputs() {
        if (this.htmlInputs) {
            this.htmlInputs.forEach(input => {
                if (input && input.parentNode) {
                    input.parentNode.removeChild(input);
                }
            });
            this.htmlInputs = [];
        }

        // Also remove orientation change listener if it was added
        if (this.isMobile && this.orientationChangeHandler) {
            window.removeEventListener('orientationchange', this.orientationChangeHandler);
            this.orientationChangeHandler = null;
        }
    }

	// Handle paste functionality
	handlePaste() {
		if (!this.activeField) return;

		 // Use modern clipboard API if available
        if (navigator.clipboard && navigator.clipboard.readText) {
            navigator.clipboard.readText()
                .then(pastedText => {
                    this.applyPastedText(pastedText);
                })
                .catch(err => {
                    console.error('Failed to read clipboard: ', err);
                    // Fall back to the old method
                    this.fallbackPaste();
                });
        } else {
            // Fall back to the old method using hidden textarea
            this.fallbackPaste();
        }
	}

    // Fallback paste method using hidden textarea
    fallbackPaste() {
        // Create temporary input element to handle paste
        const tempInput = document.createElement('textarea');
        document.body.appendChild(tempInput);
        tempInput.style.position = 'absolute';
        tempInput.focus();

        // Trigger paste
        document.execCommand('paste');

        // Wait a moment for the paste to complete
        setTimeout(() => {
            const pastedText = tempInput.value;
            document.body.removeChild(tempInput);

            this.applyPastedText(pastedText);
        }, 50);
    }

    // Apply pasted text to active field
    applyPastedText(pastedText) {
        if (!pastedText) return;

        const maxLength = this.activeField === "nickname" ? 16 : 42;

        // Update HTML input if available
        if (this.activeField === "nickname" && this.nicknameInput) {
            this.nicknameInput.value = pastedText.substring(0, maxLength);
        } else if (this.activeField === "bscAddress" && this.bscInput) {
            this.bscInput.value = pastedText.substring(0, maxLength);
        }

        // Add visual feedback for successful paste
        this.showStatusMessage("Text pasted!");
    }

	// Show short status message
	showStatusMessage(message) {
		this.log_container_msg.setText(this.formatMessage(message));
		this.log_container_msg.setOrigin(0.5, 0);
		this.log_container_msg.setStyle({ 
			fontFamily: "ApexMk2-BoldExtended",
			align: 'center'
		});
		this.log_container_msg.x = 0; // Center horizontally in the container
		this.log_container_msg.alpha = 1;

		 // Auto-hide after 1 second
		this.time.delayedCall(1000, () => {
			this.log_container_msg.alpha = 0;
		});
	}

	// Show log container with animation and ensure input fields appear
    showLogContainer() {
        // Ensure buttons remain interactive when dialog is visible
        this.restartbutton.setInteractive();
        this.home_button.setInteractive();

        this.tweens.add({
            targets: this.log_container,
            scaleX: 1,
            scaleY: 1,
            alpha: 1,
            duration: 800,
            ease: 'Back.Out',
            onStart: () => {
                this.popupsound.play();
                // Position submit button before animation completes
                this.positionSubmitButton();
            },
            onComplete: () => {
                // Signal that the log container is now fully visible
                this.events.emit('log-container-shown');

                // Immediate update for input positions
                this.updateHtmlInputPositions();

                // Reposition submit button again after container is fully scaled
                this.positionSubmitButton();

                // Multiple delayed updates to ensure fields are properly shown
                // This is crucial for desktop browsers where they might not appear right away
                setTimeout(() => {
                    this.forceShowInputFields();
                    this.updateHtmlInputPositions();
                }, 50);

                setTimeout(() => {
                    this.forceShowInputFields();
                    this.updateHtmlInputPositions();
                }, 200);

                // One final update after everything else has settled
                setTimeout(() => {
                    this.forceShowInputFields();
                    this.updateHtmlInputPositions();

                    // Try to focus nickname field after ensuring visibility
                    if (this.nicknameInput && !this.nicknameInput.focused) {
                        try {
                            this.nicknameInput.focus();
                            this.nicknameInput.focused = true;
                        } catch(e) {
                            console.log("Could not focus input:", e);
                        }
                    }
                }, 400);
            }
        });
    }

    // Force input fields to be visible - used to fix display issues
    forceShowInputFields() {
        if (this.log_container.alpha >= 0.8 && this.nicknameInput && this.bscInput) {
            // Force fields to be displayed with important flag
            this.nicknameInput.style.display = 'block';
            this.bscInput.style.display = 'block';

            // Force visibility properties
            this.nicknameInput.style.opacity = '1';
            this.bscInput.style.opacity = '1';
            this.nicknameInput.style.visibility = 'visible';
            this.bscInput.style.visibility = 'visible';
        }
    }

	// Hide log container with animation - ensure buttons work after closing
	hideLogContainer() {
		// Clear any existing auto-hide timer
		if (this.logContainerTimer) {
			this.logContainerTimer.remove();
			this.logContainerTimer = null;
		}

		// Mark form as manually closed (not submitted)
		this.formManuallyClosed = true;

		// Properly clear and disable input fields before closing
		if (this.nicknameInput) {
			this.nicknameInput.value = '';
			this.nicknameInput.blur(); // Remove focus
			this.nicknameInput.style.display = 'none';
		}
		if (this.bscInput) {
			this.bscInput.value = '';
			this.bscInput.blur(); // Remove focus
			this.bscInput.style.display = 'none';
		}

		// Make sure buttons are interactive immediately, don't wait for animation
		this.restartbutton.setInteractive();
		this.home_button.setInteractive();

		this.tweens.add({
			targets: this.log_container,
			scaleX: 0.8,
			scaleY: 0.8,
			alpha: 0,
			duration: 500,
			ease: 'Back.In',
			onComplete: () => {
                // Hide HTML inputs
                this.updateHtmlInputPositions();

                // Double-check buttons are interactive after animation completes
                this.restartbutton.setInteractive();
                this.home_button.setInteractive();

                // Skip the form and show leaderboard first
                this.showLeaderboardContainer();
			}
		});
	}

	// Validate BSC address format
	isValidBSCAddress(address) {
		// BSC address validation rules:
		// 1. Must be exactly 42 characters
		// 2. Must start with "0x"
		// 3. Remaining 40 characters must be valid hex (0-9, a-f, A-F)

		// Empty address is not valid
		if (!address || address.trim() === '') {
			return false;
		}

		// Check if address starts with 0x
		if (!address.startsWith('0x')) {
			return false;
		}

		// Check address length (must be 42 characters including 0x prefix)
		if (address.length !== 42) {
			return false;
		}

		// Check if the remaining 40 characters are valid hexadecimal
		const hexPart = address.substring(2); // Remove 0x prefix
		const hexRegex = /^[0-9a-fA-F]{40}$/;
		return hexRegex.test(hexPart);
	}

	// Handle form submission with BSC address validation
	handleSubmit() {
		// Get values directly from HTML inputs
		const nickName = this.nicknameInput ? this.nicknameInput.value.trim() : '';
		const bscAddress = this.bscInput ? this.bscInput.value.trim() : '';

		// Basic validation - only for nickname
		if (!nickName || nickName.length < 3) {
			this.showErrorMessage('Please enter a valid nickname (min 3 characters)');
			return;
		}

		// BSC address validation
		if (!this.isValidBSCAddress(bscAddress)) {
			this.showErrorMessage('Invalid BSC address! Must be 42 characters starting with 0x, followed by 40 hex characters (0-9, a-f)');
			return;
		}

		// Play submit sound
		this.submitSound.play();

		// Disable submit button and HTML inputs
		this.submit.disableInteractive();
		this.submit.setAlpha(0.5);

		if (this.nicknameInput) this.nicknameInput.disabled = true;
		if (this.bscInput) this.bscInput.disabled = true;

		// Show loading message
		this.log_container_msg.setText(this.formatMessage('Saving your score...'));
		this.log_container_msg.alpha = 1;

		// Save data to database - explicitly allowing duplicates for nickname, BSC address and score
		// Players can submit multiple scores with the same nickname and BSC address
		window.supabaseService.savePlayerData({
			nick_name: nickName,
			bsc_adress: bscAddress,
			score: this.finalScore
		})
		.then((result) => {
			console.log('Player data saved:', result);

			// Hide log container and show leaderboard
			this.tweens.add({
				targets: this.log_container,
				scaleX: 0.8,
				scaleY: 0.8,
				alpha: 0,
				duration: 500,
				ease: 'Back.In',
				onComplete: () => {
					// Hide HTML inputs
					this.updateHtmlInputPositions();

					// Fetch and show leaderboard
					this.fetchLeaderboardData();
				}
			});
		})
		.catch(error => {
			console.error('Error saving player data:', error);
			this.showErrorMessage('Error saving your score. Please try again.');

			// Re-enable the button when there's an error
			this.submit.setInteractive();
			this.submit.setAlpha(1);

			if (this.nicknameInput) this.nicknameInput.disabled = false;
			if (this.bscInput) this.bscInput.disabled = false;
		});
	}

	// Show error message
	showErrorMessage(message) {
		this.log_container_msg.setText(this.formatMessage(message));
		this.log_container_msg.setOrigin(0.5, 0);
		this.log_container_msg.setStyle({ 
			fontFamily: "ApexMk2-BoldExtended",
			align: 'center'
		});
		this.log_container_msg.x = 0; // Center horizontally in the container
		this.log_container_msg.alpha = 1;

		 // Auto-hide after 3 seconds
		this.time.delayedCall(3000, () => {
			this.log_container_msg.alpha = 0;
		});
	}

	// Show leaderboard container with animation
	showLeaderboardContainer() {
		// Make the leaderboard visible first
		this.leaderboard_container.alpha = 1;

		// Apply zoom out animation
		this.tweens.add({
			targets: this.leaderboard_container,
			x: 1067, // Return to original x position
			y: 118, // Return to original y position
			scaleX: 0.8, // Zoom out further than final size
			scaleY: 0.8,
			duration: 700,
			ease: 'Power3.Out', // Smooth easing for zoom effect
			onStart: () => {
				this.popupsound.play();
			},
			onComplete: () => {
				// Animate to final size with a small bounce
				this.tweens.add({
					targets: this.leaderboard_container,
					scaleX: 1,
					scaleY: 1,
					duration: 300,
					ease: 'Back.Out(1.7)' // Slight overshoot for subtle bounce
				});
			}
		});
	}

	// Show buttons with animation - ensure they become interactive
	showButtons() {
		// First animate restart button
		this.tweens.add({
			targets: this.restartbutton,
			scaleX: 1,
			scaleY: 1,
			alpha: 1,
			duration: 600,
			ease: 'Cubic.Out',
			onStart: () => {
				// Play popup sound when restart button appears
				this.popupsound.play();
			},
			onComplete: () => {
				// Make restart button interactive after animation completes
				this.restartbutton.setInteractive();

				// Then animate home button with slight delay
				this.tweens.add({
					targets: this.home_button,
					scaleX: 1,
					scaleY: 1,
					alpha: 1,
					duration: 600,
					ease: 'Cubic.Out',
					onStart: () => {
						// Play popup sound when home button appears
						this.popupsound.play();
					},
					onComplete: () => {
						// Make home button interactive after animation completes
						this.home_button.setInteractive();
					}
				});
			}
		});
	}

	// Set up button interactions - fix inactive buttons
	setupButtonInteractions() {
		// Add interactivity to restart button
		this.restartbutton.setInteractive();

		// Button hover effect
		this.restartbutton.on('pointerover', () => {
			this.tweens.add({
				targets: this.restartbutton,
				scaleX: 1.1,
				scaleY: 1.1,
				duration: 100
			});
		});

		// Button out effect
		this.restartbutton.on('pointerout', () => {
			this.tweens.add({
				targets: this.restartbutton,
				scaleX: 1,
				scaleY: 1,
				duration: 100
			});
		});

		// Button click effect and restart game with failsafe check
		this.restartbutton.on('pointerdown', () => {
			// Re-enable the button if it was somehow disabled
			this.restartbutton.setInteractive();

			// Play click sound
			this.clickSound.play();

			// Press animation
			this.tweens.add({
				targets: this.restartbutton,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 100,
				onComplete: () => {
					// Clean up HTML elements before changing scene
					this.cleanupHtmlInputs();

					// Fade out
					this.cameras.main.fadeOut(1000, 0, 0, 0);

					// When fade out completes, start the Level scene
					this.cameras.main.once('camerafadeoutcomplete', () => {
						this.scene.start('Level');
					});
				}
			});
		});

		// Add interactivity to home button
		this.home_button.setInteractive();

		// Home button hover effect
		this.home_button.on('pointerover', () => {
			this.tweens.add({
				targets: this.home_button,
				scaleX: 1.1,
				scaleY: 1.1,
				duration: 100
			});
		});

		// Home button out effect
		this.home_button.on('pointerout', () => {
			this.tweens.add({
				targets: this.home_button,
				scaleX: 1,
				scaleY: 1,
				duration: 100
			});
		});

		// Home button click effect and go to home
		this.home_button.on('pointerdown', () => {
			// Play click sound
			this.clickSound.play();

			// Press animation
			this.tweens.add({
				targets: this.home_button,
				scaleX: 0.9,
				scaleY: 0.9,
				duration: 100,
				onComplete: () => {
					// Fade out
					this.cameras.main.fadeOut(1000, 0, 0, 0);

					// When fade out completes, start the Start/Home scene
					this.cameras.main.once('camerafadeoutcomplete', () => {
						this.scene.start('Home');
					});
				}
			});
		});
	}

	// Method to fetch and display leaderboard data
	fetchLeaderboardData() {
		// Reset the manually closed flag as we're now in the proper flow
		this.formManuallyClosed = false;

		// Make restart and home buttons interactive after form submission
		this.restartbutton.setInteractive();
		this.home_button.setInteractive();

		// Create loading indicator in leaderboard
		const loadingText = this.add.text(
			this.leaderboard_container.x, 
			this.leaderboard_container.y + 100, 
			"Loading...", 
			{ 
				fontFamily: "ApexMk2-BoldExtended",
				fontSize: "24px" 
			}
		).setOrigin(0.5);

		// Verify Supabase connection and fetch leaderboard data
		window.supabaseService.supabase.auth.getSession()
			.then(() => {
				console.log('Supabase connection successful');
				// Fetch leaderboard data from the database
				return window.supabaseService.getPoliQuestData();
			})
			.then((data) => {
				// Remove loading text
				loadingText.destroy();
				if (data && data.length > 0) {
					console.log('Retrieved leaderboard data:', data);
					// Sort by score in descending order
					data.sort((a, b) => b.score - a.score);
					// Display top players (increased to 20)
					const topPlayers = data.slice(0, 20);
					this.displayLeaderboard(topPlayers);
					// Show leaderboard
					this.showLeaderboardContainer();
				} else {
					console.log('No leaderboard data retrieved or empty dataset');
					this.add.text(
						this.leaderboard_container.x, 
						this.leaderboard_container.y + 100, 
						"No scores yet", 
						{ 
							fontFamily: "ApexMk2-BoldExtended",
							fontSize: "24px" 
						}
					).setOrigin(0.5);
					// Show leaderboard
					this.showLeaderboardContainer();
				}
			})
			.catch(error => {
				console.error('Supabase connection error:', error);
				loadingText.setText('Connection error');
				// Show leaderboard anyway after a delay
				this.time.delayedCall(2000, () => {
					this.showLeaderboardContainer();
				});
			});
	}

	// Method to display leaderboard data
	displayLeaderboard(leaderboardData) {
		// Clear any existing leaderboard entries
		if (this.leaderboardEntries) {
			this.leaderboardEntries.forEach(entry => entry.destroy());
		}
		this.leaderboardEntries = [];

		// Adjust spacing and font size based on number of entries
		// Use smaller spacing and font when more entries are shown
		const verticalSpacing = leaderboardData.length > 15 ? 22 : (leaderboardData.length > 10 ? 25 : 40);
		const fontSize = leaderboardData.length > 15 ? "14px" : (leaderboardData.length > 10 ? "16px" : "18px");

		// Display each player in the leaderboard
		leaderboardData.forEach((player, index) => {
			// Get player name - limit to 10 characters with ellipsis
			const displayName = player.nick_name ? 
				(player.nick_name.length > 10 ? 
					player.nick_name.substring(0, 10) + '...' : 
					player.nick_name) : 
				'Unknown';

			// Create text for player name
			const nameText = this.add.text(
				-140, // X position (same as leaderboardTableName)
				120 + (index * verticalSpacing), // Y position with adjusted spacing
				`${index + 1}. ${displayName}`,
				{
					fontFamily: "ApexMk2-BoldExtended",
					fontSize: fontSize,
					color: index === 0 ? "#FFD700" : (index < 3 ? "#C0C0C0" : "#FFFFFF") // Gold for #1, silver for #2-3, white for others
				}
			);

			// Create text for player score
			const scoreText = this.add.text(
				56, // X position (same as leaderboardTablescorename)
				120 + (index * verticalSpacing), // Y position matching the name
				player.score.toString(),
				{
					fontFamily: "ApexMk2-BoldExtended",
					fontSize: fontSize,
					color: index === 0 ? "#FFD700" : (index < 3 ? "#C0C0C0" : "#FFFFFF") // Gold for #1, silver for #2-3, white for others
				}
			);

			// Add texts to the leaderboard container
			this.leaderboard_container.add(nameText);
			this.leaderboard_container.add(scoreText);

			// Store references to destroy later if needed
			this.leaderboardEntries.push(nameText);
			this.leaderboardEntries.push(scoreText);
		});
	}

	// Clean up resources when leaving the scene
    shutdown() {
        // Clean up HTML elements
        this.cleanupHtmlInputs();

        // Remove resize listener
        this.scale.off('resize', this.updateHtmlInputPositions, this);

        // Remove orientation change listener
        if (this.isMobile) {
            window.removeEventListener('orientationchange', () => this.updateHtmlInputPositions());
        }
    }

	// Helper function to format text with line breaks at 40 characters
	formatMessage(message) {
		if (!message) return "";
		let result = "";
		let currentLine = "";
		// Split by existing line breaks first
		const lines = message.split('\n');
		for (let line of lines) {
			// Handle each original line by breaking it into chunks of 40
			const words = line.split(' ');
			currentLine = "";
			for (let word of words) {
				// Check if adding this word would exceed 40 characters
				if ((currentLine + " " + word).length > 40) {
					// Add current line to result and start a new line
					result += currentLine + "\n";
					currentLine = word;
				} else {
					// Add word to current line with space if not first word
					currentLine = currentLine ? currentLine + " " + word : word;
				}
			}
			// Add the last line
			result += currentLine + "\n";
		}
		// Remove trailing newline
		return result.trim();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here