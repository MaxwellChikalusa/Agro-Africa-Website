from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Agro Africa Trading API"}

@app.get("/company")
def company():
    return {
        "name": "Agro Africa Trading",
        "vision": "Eradicating famine through productivity",
        "mission": "Empowering small-scale farmers sustainably"
    }
