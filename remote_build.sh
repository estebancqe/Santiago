cd Documents/Proyectos/Santiago
python -m venv .venvsantiago
source .venvsantiago/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
rm -rf public
reflex init
reflex export --frontend-only
unzip frontend.zip -d public
rm -f frontend.zip
deactivate