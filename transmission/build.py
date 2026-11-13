from PIL import Image
import numpy as np, os, shutil, zipfile
src='/mnt/data'
out='/mnt/data/krunch-transmission/assets'
# Knock out the pale paper background from the two angel drawings, retaining anti-aliased edges.
for filename, target in [('Unbenanntes_Projekt(1).JPEG','angel-kdbb.png'),('Unbenanntes_Projekt.JPEG','angel-akr.png')]:
    im=Image.open(os.path.join(src,filename)).convert('RGB')
    arr=np.asarray(im).astype(np.float32)
    bg=np.array([245,248,241],dtype=np.float32)
    dist=np.sqrt(((arr-bg)**2).sum(axis=2))
    # Background fades to full opacity over a narrow range; preserves the colored illustration.
    alpha=np.clip((dist-10)/24,0,1)
    rgba=np.dstack([arr, (alpha*255).astype(np.uint8)])
    Image.fromarray(rgba,'RGBA').save(os.path.join(out,target), optimize=True)
shutil.copy2(os.path.join(src,'circuit copy.png'), os.path.join(out,'circuit-city.png'))
shutil.copy2(os.path.join(src,'photo-output Kopie(1).png'), os.path.join(out,'stone.png'))
