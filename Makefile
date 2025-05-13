# Makefile for managing Docusaurus app

DOCUSAURUS_DIR=docusaurus
PID_FILE=$(DOCUSAURUS_DIR).pid
LOG_FILE=$(DOCUSAURUS_DIR).log

.PHONY: start stop status hard-stop help

start:
	@if [ ! -d "$(DOCUSAURUS_DIR)" ]; then \
		echo "❌ Directory '$(DOCUSAURUS_DIR)' does not exist!"; \
		exit 1; \
	fi
	@echo "🚀 Starting Docusaurus..."
	@if [ -f $(PID_FILE) ] && kill -0 `cat $(PID_FILE)` 2>/dev/null; then \
		echo "⚠️ Docusaurus is already running with PID `cat $(PID_FILE)`."; \
	else \
		cd $(DOCUSAURUS_DIR) && npm install; \
		cd $(DOCUSAURUS_DIR) && nohup npx docusaurus start > ../$(LOG_FILE) 2>&1 & echo $$! > ../$(PID_FILE); \
		echo "✅ Docusaurus started with PID `cat $(PID_FILE)`."; \
	fi

stop:
	@echo "🛑 Stopping Docusaurus..."
	@if [ -f $(PID_FILE) ]; then \
		kill `cat $(PID_FILE)` && rm -f $(PID_FILE); \
		echo "✅ Docusaurus stopped."; \
	else \
		echo "⚠️ No PID file found. Is Docusaurus running?"; \
	fi

status:
	@echo "📊 Checking status..."
	@if [ -f $(PID_FILE) ] && kill -0 `cat $(PID_FILE)` 2>/dev/null; then \
		echo "✅ Docusaurus is running with PID `cat $(PID_FILE)`."; \
	else \
		echo "❌ Docusaurus is not running."; \
	fi

hard-stop:
	@echo "💥 Force killing all Docusaurus-related processes..."
	@pkill -f "docusaurus" || echo "⚠️ No Docusaurus processes found."
	@rm -f $(PID_FILE)
	@echo "✅ All matching processes killed and PID file removed."

help:
	@echo ""
	@echo "📘 Docusaurus Makefile Commands:"
	@echo ""
	@echo "  make start      - Start Docusaurus (installs deps, runs server)"
	@echo "  make stop       - Stop Docusaurus using saved PID"
	@echo "  make status     - Show if Docusaurus is running"
	@echo "  make hard-stop  - Force kill all Docusaurus-related processes"
	@echo "  make help       - Show this help message"
	@echo ""
